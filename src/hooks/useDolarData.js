import { useState, useEffect, useCallback } from 'react';
import { dolarApi } from '../services/api/dolarApi';

export const useDolarData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await dolarApi.getLatest();
      setData(result);
    } catch (err) {
      setError(err.message || 'Error al obtener datos del dólar');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch };
};

export default useDolarData;