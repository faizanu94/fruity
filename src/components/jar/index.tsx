import React from 'react';
import { useJarStore } from '../../store';
import { Chart } from './chart';
import {
  headerStyle,
  jarContainerStyle,
  fruitListItemStyle,
  totalCaloriesStyle,
  chartWrapperStyle,
} from '../../styles';

export const Jar: React.FC = () => {
  const fruitsInJar = useJarStore((state) => state.fruitsInJar);
  const totalCalories = fruitsInJar.reduce(
    (acc, fruit) => acc + fruit.nutritions.calories,
    0
  );

  return (
    <div style={jarContainerStyle}>
      <h2 style={{ ...headerStyle, color: '#e65100' }}>My Fruit Jar</h2>
      <ul style={{ padding: 0, listStyleType: 'none' }}>
        {fruitsInJar.map((fruit, index) => (
          <li key={index} style={fruitListItemStyle}>
            <span>{fruit.name}</span>
            <span>{fruit.nutritions.calories} cal</span>
          </li>
        ))}
      </ul>
      <p style={totalCaloriesStyle}>Total Calories: {totalCalories}</p>
      <div style={chartWrapperStyle}>
        <Chart fruits={fruitsInJar} />
      </div>
    </div>
  );
};
