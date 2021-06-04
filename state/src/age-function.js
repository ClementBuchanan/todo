import React, { useState, useEffect } from 'react';

function Age(props) {

  const [age, setAge] = useState(props.age);
  const [smiling, setSmiling] = useState(false);
  const [either, setEither] = useState(false);

  const changeAge = () => {
    setAge(age + 1);
  }

  const changeExpression = () => {
    setSmiling(!smiling);
  }

  const changeEither = () => {
    setEither(!either);
  }

  //This will simulate when the componentMounted... runs ONLY ONCE on the 1st run
  useEffect(() => {
    console.log('this runs everytime the component mounts/runs ONLY ONCE!')
  }, []);

  //This simulates when the componentDidUpdate
  useEffect(() => {
    console.log('this runs everytime the component renders itself')
  });

  //setup watcher/listner for the 'age' variable and runs whenever
  //only that changes.
  //you can also run an API call whenever the URL changes by doing this same thing.
  useEffect(() => {
    console.log('This runs everytime age changes')
  }, [age]);

  //This one runs  either when 'age' changes or when 'changeExpression' changes.
  useEffect(() => {
    console.log('This runs when either age or facial expression changes')
  }, [age, smiling]);

  //This one will simulate when the componentUnmount()
  useEffect(() => {
    return () => console.log('The component unmounted. GOOD BYE')
  }, [])

  return (
    <>
      <h2>My age is: {age}, and I am smiling about it {smiling.toString()}</h2>
      <button onClick={changeAge}>Change Age</button>
      <button onClick={changeExpression}>Change Expression</button>
      <button onClick={changeEither}>Change Either</button>
    </>
  )
}



export default Age;