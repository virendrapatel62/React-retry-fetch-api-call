import React, { useEffect } from 'react';
import './style.css';

export default function App() {
  const [retryCount, setRetryCount] = React.useState(0);
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts--')
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((data) => setData(data))
      .catch((error) => {
        retryCount < 3 && setRetryCount(retryCount + 1);
      });
  }, [retryCount]);

  return (
    <div>
      <h1>Retry Count : {retryCount}</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
