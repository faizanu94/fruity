import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface Fruit {
  name: string;
  nutritions: {
    calories: number;
  };
}

interface Props {
  fruits: Fruit[];
}

const COLORS = ['#FFBB28', '#FF8042', '#0088FE', '#00C49F'];

export const Chart: React.FC<Props> = ({ fruits }) => {
  const data = fruits.reduce(
    (acc: { name: string; calories: number }[], fruit) => {
      const existing = acc.find((item) => item.name === fruit.name);
      if (existing) {
        existing.calories += fruit.nutritions.calories;
      } else {
        acc.push({ name: fruit.name, calories: fruit.nutritions.calories });
      }
      return acc;
    },
    []
  );

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <Pie
          data={data}
          dataKey="calories"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={40}
          paddingAngle={5}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) => `${value} cal`}
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '8px',
          }}
        />
        <Legend
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{
            paddingTop: '20px',
            fontSize: '12px',
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
