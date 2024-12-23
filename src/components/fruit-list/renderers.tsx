import { Fruit } from '../../types';
import { buttonStyle, listItemStyle, tableStyles } from '../../styles';

const renderListView = (
  fruits: Fruit[],
  addFruit: (fruit: Fruit) => void,
  addAllFruits: (fruits: Fruit[]) => void
) => (
  <div>
    <button
      onClick={() => addAllFruits(fruits)}
      style={{ ...buttonStyle, marginBottom: '16px', width: '100%' }}
    >
      Add All Fruits
    </button>
    {fruits.map((fruit) => (
      <div key={fruit.name} style={listItemStyle}>
        {fruit.name} ({fruit.nutritions.calories} cal)
        <button onClick={() => addFruit(fruit)} style={buttonStyle}>
          Add
        </button>
      </div>
    ))}
  </div>
);

const renderTableView = (
  fruits: Fruit[],
  addFruit: (fruit: Fruit) => void,
  addAllFruits: (fruits: Fruit[]) => void
) => (
  <div style={tableStyles.container}>
    <button
      onClick={() => addAllFruits(fruits)}
      style={{ ...buttonStyle, marginBottom: '16px', width: '100%' }}
    >
      Add All Fruits
    </button>
    <table style={tableStyles.table}>
      <thead>
        <tr>
          <th style={tableStyles.th}>Name</th>
          <th style={tableStyles.th}>Family</th>
          <th style={tableStyles.th}>Order</th>
          <th style={tableStyles.th}>Genus</th>
          <th style={tableStyles.th}>Calories</th>
          <th style={tableStyles.th}>Action</th>
        </tr>
      </thead>
      <tbody>
        {fruits.map((fruit) => (
          <tr key={fruit.name}>
            <td style={tableStyles.td}>{fruit.name}</td>
            <td style={tableStyles.td}>{fruit.family}</td>
            <td style={tableStyles.td}>{fruit.order}</td>
            <td style={tableStyles.td}>{fruit.genus}</td>
            <td style={tableStyles.td}>{fruit.nutritions.calories}</td>
            <td style={tableStyles.td}>
              <button onClick={() => addFruit(fruit)} style={buttonStyle}>
                Add
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export { renderListView, renderTableView };
