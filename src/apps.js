import React from 'react';
import ThemeContext from './context/Theme.js';
import siteContext from './context/site.js';

import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <ToDo />
      </>
    );
  }
}