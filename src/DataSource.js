import React, { useState, useEffect} from "react";

export const DataSource = ({ resourceName, getDataFunction = () => {}, children }) => {
  const [ state, setState ] = useState();

  useEffect(() => {
    (async () => {
      const data = await getDataFunction();
      setState(data);
    })();
  }, [getDataFunction]);

  return (
    <>
      {React.Children.map(children, child => {
        if(React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state});
        }
        return child;
      })}
    </>
  )
}
