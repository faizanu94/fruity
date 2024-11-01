import React from 'react';
import { listItemStyle, headerStyle } from '../../styles';
import { useJarStore } from '../../store';

export const Jar: React.FC = () => {
  const fruitsInJar = useJarStore((state) => state.fruitsInJar);
  const totalCalories = fruitsInJar.reduce(
    (acc, fruit) => acc + fruit.nutritions.calories,
    0
  );

  return (
    <div>
      <h2 style={headerStyle}>Jar</h2>
      <ul>
        {fruitsInJar.map((fruit, index) => (
          <li key={index} style={listItemStyle}>
            {fruit.name} ({fruit.nutritions.calories} cal)
          </li>
        ))}
      </ul>
      <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '16px' }}>
        Total Calories: {totalCalories}
      </p>
    </div>
  );
};
