import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Scrapeform from './components/Scrapeform';
import Datagrid from './components/Datagrid'; 
import ExportButton from './components/ExportButton';

function App() {
  const [scrapedData, setScrapedData] = useState([]);


  const fetchAllData = async () => {
    try {

      const response = await axios.get('http://localhost:5000/api/data');
      setScrapedData(response.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };


  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#f4f7f6', 
      minHeight: '100vh', 
      width: '100vw',    
      margin: 0, 
      padding: '40px',  
      boxSizing: 'border-box',
      display: 'block' 
    }}>
      <div style={{ width: '100%', margin: '0 auto' }}>
        <header style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h1 style={{ color: '#333', fontSize: '2.8rem', fontWeight: 'bold' }}>
            Web Scraper
          </h1>
          <p style={{ color: '#666', fontSize: '1.2rem' }}>
            Enter a URL to extract data and save it to your database.
          </p>
        </header>

        <main style={{ 
          backgroundColor: '#fff', 
          padding: '40px', 
          borderRadius: '12px', 
          boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
          width: '100%',
          boxSizing: 'border-box'
        }}>

          <div style={{ marginBottom: '40px' }}>
            <Scrapeform onScrapeSuccess={fetchAllData} />
          </div>
          
    
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '20px',
            borderBottom: '2px solid #f0f0f0',
            paddingBottom: '15px'
          }}>
            <h2 style={{ fontSize: '24px', color: '#444', margin: 0 }}>Recent Scrapes</h2>
            <ExportButton />
          </div>

     
          <div style={{ width: '100%' }}>
            <Datagrid data={scrapedData} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;