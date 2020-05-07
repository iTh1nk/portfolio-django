import React, { useState } from 'react';
import Login from './Login'

export default function AdminContainer () {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <Login />
    )
  }

  return (
    <>
Authenticated!
    </>
  )
}