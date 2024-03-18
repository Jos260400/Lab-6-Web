
import React, { useState, useEffect } from 'react';

const DataFetcher = ({ url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  if (!data) {
    throw new Promise(resolve => {
      setTimeout(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setData(data);
            resolve();
          });
      }, 1000); 
    });
  }

  return (
    <div>
      {}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
