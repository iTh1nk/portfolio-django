import React, { useState, useEffect, useContext } from "react";
import Login from "./Login";
import Admin from "./Admin";
import { AssignContext } from "./AssignContext";
import Axios from "axios";
import IsLoading from "./IsLoading";

export default function AdminContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Axios.post(
      "http://localhost:8000/api/v1/istokened/",
      { token: window.localStorage.getItem("auth") },
      {
        headers: {
          Authorization: window.localStorage.getItem("auth"),
        },
      }
    )
      .then((resp) => {
        if (resp.data.message === true) {
          setIsAuthenticated(true);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [isAuthenticated]);

  if (isLoading) {
    return <IsLoading />;
  }

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
