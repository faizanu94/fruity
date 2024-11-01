import React from 'react';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '16px',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const cardStyle: React.CSSProperties = {
  padding: '24px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  backgroundColor: '#f9f9f9',
  width: '100%',
  maxWidth: '600px',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: 'forestgreen',
  color: 'white',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const listItemStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px',
  backgroundColor: '#ffffff',
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
  marginBottom: '8px',
};

const headerStyle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#333',
  cursor: 'pointer',
};

const jarContainerStyle: React.CSSProperties = {
  padding: '20px',
  backgroundColor: '#fff8e1',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  maxWidth: '400px',
  margin: '20px auto',
};

const fruitListItemStyle: React.CSSProperties = {
  ...listItemStyle,
  backgroundColor: '#fff2e6',
  border: '1px solid #ffd0a6',
  borderRadius: '4px',
  padding: '10px',
  margin: '8px 0',
  display: 'flex',
  justifyContent: 'space-between',
};

const totalCaloriesStyle: React.CSSProperties = {
  fontWeight: 'bold',
  fontSize: '20px',
  color: '#e65100',
  marginTop: '20px',
  textAlign: 'center',
};

export {
  containerStyle,
  cardStyle,
  buttonStyle,
  listItemStyle,
  headerStyle,
  jarContainerStyle,
  fruitListItemStyle,
  totalCaloriesStyle,
};
