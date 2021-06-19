import { useState, useEffect } from "react";
import axios from 'axios';

const useAjax = () => {
  const [options, setOptions] = useState({});
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!options.method) {
      return;
    }
    const ajax = async () => {
      console.log(options);
      setLoading(true);
      try {
        const res = await axios(options)
        setResponse(options.method === 'delete' ? null : res);
        setLoading(false);
      } catch (e) {
        setError(e)
      }
    }
    ajax();
  }, [options])
  return { setOptions, response, error, loading, options }
}
export default useAjax;