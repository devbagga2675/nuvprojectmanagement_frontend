import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (method, url, data = null) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        console.log('hit')
      setIsLoading(true);
      try {
        const api = axios.create({
          baseURL: 'BASE_URL', 
        });

        const response = await api({
          method: method.toLowerCase(),
          url: url,
          data: data,
        });

        setResponse(response.data);
        setError(null);
      } catch (err) {
        setError(err);
        setResponse(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [method, url, data]);

  return { response, error, isLoading };
};

export default useApi;