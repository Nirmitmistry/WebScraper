import React from 'react';

const ExportButton = () => {
  const handleExport = () => {
    window.open('http://localhost:5000/api/data/export', '_blank');
  };

  return (
    <button
      onClick={handleExport}
      style={{
        padding: '10px 20px',
        backgroundColor: '#17a2b8',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'background-color 0.3s'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#138496'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#17a2b8'}
    >
    Export CSV
    </button>
  );
};

export default ExportButton;