import React, { useState } from "react";
import Login from "./Login";
import Admin from "./Admin";
import { AssignContext } from "./AssignContext";

export default function AdminContainer() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  if (!isAuthenticated) {
    return (
      <AssignContext.Provider value={{ setIsAuthenticated }}>
        <Login />
      </AssignContext.Provider>
    );
  }

  return (
    <>
      <Admin />
    </>
  );
}
