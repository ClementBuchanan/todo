import React, { useState } from 'react';
import axios from 'axios';
export const AuthContext = React.createContext();

const Settings = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  async function logIn(username, pswd) {
    axios
      .post(
        'https://api-js401.herokuapp.com/signin',
        {},
        { username, password: pswd }
      )
      .then((response) => {
        console.log(response.data);
      });
  }
  async function signup(username, pswd) {
    axios
      .post(
        'https://api-js401.herokuapp.com/signup',

        { username, password: pswd }
      )
      .then((response) => {
        console.log(response.data);
      });
  }
  console.log('AuthContext loggedIn;;;;;;;;', loggedIn);
  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        logIn,
        signup,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default Settings;
