import React from 'react';
import Context from './context.js';

import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <Context>
        <ToDo />
      </Context>
    );
  }
}
