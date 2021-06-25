import React from 'react';
export default function ToDosList(props) {
  console.log(props.list);

  return (
    <>
      <h1>What's the plan for today?</h1>
      <ul>
        {props.list.map(item => (
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
        ))}
      </ul>
    </>
  );
}