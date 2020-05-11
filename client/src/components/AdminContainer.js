import React, { useState, useEffect } from "react";
import Login from "./Login";
import Admin from "./Admin";
import { AssignContext } from "./AssignContext";

export default function AdminContainer() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <AssignContext.Provider value={{ setIsAuthenticated }}>
        <Login />
      </AssignContext.Provider>
    );
  }

  return (
    <>
      <AssignContext.Provider value={{ setIsAuthenticated }}>
        <Admin />
      </AssignContext.Provider>
    </>
  );
}
