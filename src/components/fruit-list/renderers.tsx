import { Fruit } from '../../types';
import { buttonStyle, listItemStyle } from '../../styles';

const renderListView = (fruits: Fruit[], addFruit: (fruit: Fruit) => void) => (
  <div>
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

const renderTableView = (fruits: Fruit[], addFruit: (fruit: Fruit) => void) => (
  <table>
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
            <button onClick={() => addFruit(fruit)} style={buttonStyle}>
              Add
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export { renderListView, renderTableView };
