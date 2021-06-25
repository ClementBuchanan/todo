import React, { useState } from 'react';

export const Context = React.createContext();

const Settings = (props) => {
  const [max, setMax] = useState(0);
  const [showCompleted, setShowCompleted] = useState(true);

  return (
    <Context.Provider value={{ max, showCompleted, setMax, setShowCompleted }}>
      {props.children}
    </Context.Provider>
  );
};

export default Settings;
