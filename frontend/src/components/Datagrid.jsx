import React from 'react';

const datagrid = ({ data }) => {
  if (!data || data.length === 0) {
    return <p style={{ textAlign: 'center', color: '#666', padding: '20px' }}>No data available. Start by scraping a URL!</p>;
  }

  return (
    <div style={{ marginTop: '20px', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
        <thead>
          <tr style={{ backgroundColor: '#f1f1f1', borderBottom: '2px solid #ccc' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Title</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Price</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Source</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Scraped Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}>{item.title}</td>
              <td style={{ padding: '10px', fontWeight: 'bold' }}>{item.price}</td>
              <td style={{ padding: '10px' }}>{item.source}</td>
              <td style={{ padding: '10px' }}>{new Date(item.scrapedAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default datagrid;