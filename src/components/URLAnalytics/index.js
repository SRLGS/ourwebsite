import React, { useState } from 'react';
import axios from 'axios';

const URLAnalytics = () => {
  const [shortenedURL, setShortenedURL] = useState('https://dadaddad.ccbp.tech');
  const [viewsCount, setViewsCount] = useState(10000);

  

 
const proxyURL = 'https://cors-proxy.bitly.com/';
const apiKey = 'd02f4780193a4e9da94482a3f3afd6f8ad99868d';

const getURLAnalytics = () => {
  axios
    .get(`${proxyURL}https://api-ssl.bitly.com/v4/bitlinks/${shortenedURL}/clicks/summary`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      setViewsCount(response.data.total_clicks);
    })
    .catch((error) => {
      console.error('Error fetching URL analytics:', error);
    });
};

  return (
    <div>
      <input
        type="text"
        value={shortenedURL}
        onChange={(e) => setShortenedURL(e.target.value)}
      />
      <button onClick={getURLAnalytics}>Get Views Count</button>
      <p>Number of Views: {viewsCount}</p>
    </div>
  );
};

export default URLAnalytics;
