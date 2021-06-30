import React, { useState, useContext } from 'react';
import { AuthContext } from '../../auth-context';
import Form from 'react-bootstrap/Form';

export default function AuthLine(props) {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [pswd, setPswd] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    context.logIn(userName, pswd);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='userName'
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type='text'
        placeholder='pswd'
        onChange={(e) => setPswd(e.target.value)}
      />
    </Form>
  );
}
