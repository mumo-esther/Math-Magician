import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=dreams',
          {
            headers: {
              'x-api-key': 'bNenrhJqkrfUy8dcqXv9No8xpp6ugcy5KNvllLDQ',
            },
          },
        );
        const data = await response.json();
        setQuote(data[0].quote);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
