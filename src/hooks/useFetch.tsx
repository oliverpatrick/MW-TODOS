import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [loading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>();
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    // const controller = new AbortController();
    // const signal = controller.signal;

    async function fetchData() {
      try {
        const response = await fetch(url);
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
  }, [url]);

  return { loading, error, data };
}
