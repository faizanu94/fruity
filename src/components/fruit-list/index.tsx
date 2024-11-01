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
  const { fruits, isLoading, isError } = useFruits();
  const [groupBy, setGroupBy] = useState<'none' | 'family' | 'order' | 'genus'>(
    'none'
  );
  const [view, setView] = useState<'list' | 'table'>('list');
  const [collapsedGroups, setCollapsedGroups] = useState<{
    [key: string]: boolean;
  }>({});

  const addFruit = useJarStore((state) => state.addFruit);

  const handleToggleView = useCallback(() => {
    setView((prevView) => (prevView === 'list' ? 'table' : 'list'));
  }, []);

  const toggleCollapse = (key: string) => {
    setCollapsedGroups((prevCollapsedGroups) => ({
      ...prevCollapsedGroups,
      [key]: !prevCollapsedGroups[key],
    }));
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  const groupedFruits = fruits?.reduce<Record<string, Fruit[]>>(
    (acc, fruit) => {
      const key = groupBy === 'none' ? 'all' : fruit[groupBy];
      if (!acc[key]) acc[key] = [];
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
            {!collapsedGroups[key] && viewRenderers[view](fruits, addFruit)}
          </div>
        ))}
    </div>
  );
};
