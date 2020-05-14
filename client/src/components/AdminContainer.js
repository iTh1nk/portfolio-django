import React, { useState, useEffect } from "react";
import Login from "./Login";
import Admin from "./Admin";
import { AssignContext } from "./AssignContext";
import Axios from "axios";

let token = localStorage.getItem("auth");

export default function AdminContainer() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Axios.post("http://localhost:8000/api/v1/istokened/", token, {
      headers: {
        Authorization: token,
      },
    })
      .then((resp) => {
        if (resp.data.message === true) {
          setIsAuthenticated(true);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
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
