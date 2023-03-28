import { useState, useEffect } from "react";

export const useDataSource = (getDataFunction) => {
  const [ data, setData ] = useState({});

  useEffect(() => {
    (async() => {
      const results = await getDataFunction();
      setData(results);
    })();
  }, [getDataFunction]);

  return data;
}
