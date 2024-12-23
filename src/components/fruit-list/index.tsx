import React, { useState, useCallback } from 'react';
import { useFruits } from '../../hooks/fruits';
import { Fruit } from '../../types';
import { buttonStyle, headerStyle } from '../../styles';
import { useJarStore } from '../../store';
import { renderListView, renderTableView } from './renderers';

const viewRenderers = {
  list: renderListView,
  table: renderTableView,
};

export const FruitList: React.FC = () => {
  const { fruits, isLoading, isError, mutate } = useFruits();
  const [groupBy, setGroupBy] = useState<'none' | 'family' | 'order' | 'genus'>(
    'none'
  );
  const [view, setView] = useState<'list' | 'table'>('list');
  const [collapsedGroups, setCollapsedGroups] = useState<{
    [key: string]: boolean;
  }>({});

  const addFruit = useJarStore((state) => state.addFruit);
  const addAllFruits = useJarStore((state) => state.addAllFruits);

  const handleToggleView = useCallback(() => {
    setView((prevView) => (prevView === 'list' ? 'table' : 'list'));
  }, []);

  const toggleCollapse = (key: string) => {
    setCollapsedGroups((prevCollapsedGroups) => ({
      ...prevCollapsedGroups,
      [key]: !prevCollapsedGroups[key],
    }));
  };

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>Loading fruits...</div>
        <div
          style={{
            width: '50px',
            height: '50px',
            border: '5px solid #f3f3f3',
            borderTop: '5px solid forestgreen',
            borderRadius: '50%',
            margin: '0 auto',
            animation: 'spin 1s linear infinite',
          }}
        />
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ color: '#d32f2f', marginBottom: '1rem' }}>
          Error loading fruits
        </p>
        <button
          onClick={() => mutate()}
          style={{
            ...buttonStyle,
            backgroundColor: '#d32f2f',
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  const groupedFruits = fruits?.reduce<Record<string, Fruit[]>>(
    (acc, fruit) => {
      const key = groupBy === 'none' ? 'all' : fruit[groupBy].trim();
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(fruit);
      return acc;
    },
    {}
  );

  return (
    <div>
      <select
        onChange={(e) =>
          setGroupBy(e.target.value as 'none' | 'family' | 'order' | 'genus')
        }
        style={{ marginBottom: '16px', padding: '8px', width: '100%' }}
      >
        <option value="none">None</option>
        <option value="family">Family</option>
        <option value="order">Order</option>
        <option value="genus">Genus</option>
      </select>
      <button
        onClick={handleToggleView}
        style={{ ...buttonStyle, marginBottom: '8px' }}
      >
        Toggle View
      </button>
      {groupedFruits &&
        Object.entries(groupedFruits).map(([key, fruits]) => (
          <div key={key}>
            {groupBy !== 'none' && (
              <h3 style={headerStyle} onClick={() => toggleCollapse(key)}>
                {key} {collapsedGroups[key] ? '▲' : '▼'}
              </h3>
            )}
            {!collapsedGroups[key] &&
              viewRenderers[view](fruits, addFruit, addAllFruits)}
          </div>
        ))}
    </div>
  );
};
