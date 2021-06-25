import React, { useContext } from 'react';
import { Context } from '../../context.js';

export default function ToDosList(props) {
  const context = useContext(Context);
  console.log(props.list);

  return (
    <>
      <h1>What's the plan for today?</h1>
      <ul>
        {props.list.map((item) => {
          console.log(context.showCompleted, item.complete);
          if (!context.showCompleted && item.complete) {
            return null;
          }
          return (
            <li
              className={`complete-${item.complete.toString()}`}
              key={item._id}
            >
              <span onClick={() => props.handleComplete(item)}>
                {item.text}
              </span>
              <button onClick={() => props.handleDelete(item._id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
