import React, { useContext } from 'react';
import Context from './context.js';
import AuthContext from './auth-context';
import AuthLine from './components/todo/authLine';

import ToDo from './components/todo/todo.js';

export default function App(props) {
  const context = useContext(AuthContext);

  return <Context>{context.loggedIn ? <ToDo /> : <AuthLine />}</Context>;
}
