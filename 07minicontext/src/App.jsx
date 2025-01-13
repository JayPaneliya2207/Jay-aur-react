// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

import UserContextProvider from "./context/UserContextProvider";
function App() {
  return (
    <>
      <UserContextProvider>
        <h1>Jay with Char share is important</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
