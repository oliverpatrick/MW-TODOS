import { useEffect, useState } from "react";

/**
 *
 * @param query returns query endpoint for the api
 * @returns
 */
export function useFetch<T>(query: string) {
  const [loading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>();
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    // const controller = new AbortController();
    // const signal = controller.signal;

    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}${query}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    // return () => {
    //   controller.abort();
    // };
  }, [query]);

  return { loading, error, data };
}
