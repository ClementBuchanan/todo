import React, { useContext } from 'react';
import { Context } from '../../context.js';

export default function ToDosList(props) {
  const context = useContext(Context);
  console.log(props.list);
  const sortedList = props.list.sort((a, b) => {
    if (context.sortFactor === 'difficulty') {
      return a.difficulty - b.difficulty;
    }
    if (context.sortFactor === 'completed') {
      return a.completed - b.completed;
    }
  });

  return (
    <>
      <h1>What's the plan for today?</h1>
      <ul>
        {sortedList.map((item) => {
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
