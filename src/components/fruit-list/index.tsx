import React, { useState, useCallback } from 'react';
import { useFruits } from '../../hooks/fruits';
import { Fruit } from '../../types';
import { buttonStyle, listItemStyle, headerStyle } from '../../styles';
import { useJarStore } from '../../store';

export const FruitList: React.FC = () => {
  const { fruits, isLoading, isError } = useFruits();
  const [groupBy, setGroupBy] = useState<'none' | 'family' | 'order' | 'genus'>(
    'none'
  );
  const [view, setView] = useState<'list' | 'table'>('list');
  const addFruit = useJarStore((state) => state.addFruit);

  const handleToggleView = useCallback(() => {
    setView((prevView) => (prevView === 'list' ? 'table' : 'list'));
  }, []);

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
      <button onClick={handleToggleView} style={buttonStyle}>
        Toggle View
      </button>
      {groupedFruits &&
        Object.entries(groupedFruits).map(([key, fruits]) => (
          <div key={key} style={{ marginBottom: '16px' }}>
            <h3 style={headerStyle}>{groupBy !== 'none' && key}</h3>
            {view === 'list' ? (
              <ul>
                {fruits.map((fruit) => (
                  <li key={fruit.name} style={listItemStyle}>
                    {fruit.name} ({fruit.nutritions.calories} cal)
                    <button
                      onClick={() => addFruit(fruit)}
                      style={{ ...buttonStyle, marginLeft: '8px' }}
                    >
                      Add
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Family</th>
                    <th>Order</th>
                    <th>Genus</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {fruits.map((fruit) => (
                    <tr key={fruit.name}>
                      <td>{fruit.name}</td>
                      <td>{fruit.family}</td>
                      <td>{fruit.order}</td>
                      <td>{fruit.genus}</td>
                      <td>{fruit.nutritions.calories}</td>
                      <td>
                        <button
                          onClick={() => addFruit(fruit)}
                          style={buttonStyle}
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
    </div>
  );
};
