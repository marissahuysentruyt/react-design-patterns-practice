import axios from "axios";
import React, { useState, useEffect } from "react";

export const UserLoader = ({ userId, children}) => {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return (
    <>
      {/* UserLoader still has to return its children (this checks if they are valid React elements) */}
      {React.Children.map(children, child => {
        if(React.isValidElement(child)) {
          return React.cloneElement(child, { user })
        }
        return child;
      })}
    </>
  )
}
