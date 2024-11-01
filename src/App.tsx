import React from 'react';
import { FruitList } from './components/fruit-list/index';
import { Jar } from './components/jar';
import { containerStyle, cardStyle } from './styles';

function App() {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <FruitList />
      </div>
      <div style={cardStyle}>
        <Jar />
      </div>
    </div>
  );
}

export default App;
