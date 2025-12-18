import React, { useState } from 'react';
import axios from 'axios';

const Scrapeform = ({ onScrapeSuccess }) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/scrape', { url });
      
      onScrapeSuccess(response.data);
      
      setUrl('');
      alert('Website successfully scraped and saved to MongoDB!');
    } catch (error) {
      console.error('Scrape Error:', error);
      alert('Error: ' + (error.response?.data?.message || 'Server is offline or URL is invalid'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="scrape-container" style={{ marginBottom: '30px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px' }}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL to scrape..."
          required
          style={{
            flex: 1,
            padding: '12px',
            borderRadius: '6px',
            border: '1px solid #ddd',
            fontSize: '16px'
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '12px 24px',
            backgroundColor: loading ? '#6c757d' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
        >
          {loading ? 'Processing...' : 'Start Scrape'}
        </button>
      </form>
    </div>
  );
};

export default Scrapeform;

