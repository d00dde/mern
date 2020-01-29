import {useState, useCallback} from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    try{
      
      if(body) {
        body = JSON.stringify(body);
        headers['Content-type'] = 'application/json';
      }

      setLoading(true);
      const responce = await fetch(url, {method, body, headers});
      const data = await responce.json();

      if (!responce.ok) {
        throw new Error (data.message || 'Server error');
      }
            
      setLoading(false);
      return data;
      
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message);
      throw error;
    }
  }, []);
  const clearErrors = () => {
    setError(null);
  }
  return {loading, error, request, clearErrors};
}