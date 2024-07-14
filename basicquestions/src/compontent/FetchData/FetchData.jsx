import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Satyamray21');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data && (
          <>
            <li><strong>ID:</strong> {data.id}</li>
            <li><strong>Login:</strong> {data.login}</li>
            <li><strong>Name:</strong> {data.name}</li>
            <li><strong>Public Repos:</strong> {data.public_repos}</li>
            <li><strong>Followers:</strong> {data.followers}</li>
            <li><strong>Following:</strong> {data.following}</li>
            <li><strong>Avatar:</strong> <img src={data.avatar_url} alt="avatar" width="50" /></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default FetchData;
