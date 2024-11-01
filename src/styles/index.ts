import React from 'react';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const cardStyle: React.CSSProperties = {
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9',
  width: '100%',
  maxWidth: '600px',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#6200ea',
  color: 'white',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '10px',
};

const listItemStyle: React.CSSProperties = {
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
};

export { containerStyle, cardStyle, buttonStyle, listItemStyle, headerStyle };
