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
              'x-api-key': 'vy41OH8oq8B6h6OHdcoEH8vxYO09L1bL1q5SVOX3',
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
