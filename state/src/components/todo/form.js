import React, { useState } from 'react';

export default function TodoForm({ todos, setTodos }) {

  const initialState = {
    item: {},
  }
  const [todo, setTodo] = useState(initialState);

  const handleInputChange = e => {
    setTodo({
      item: { ...initialState.item },
      message: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([todo, ...todos])
    setTodos(initialState)
  }

  // e.target.reset();
  // this.props.handleSubmit(this.state.item);
  // const item = {};
  // this.setState({ item });


  return (
    <>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </label>
        <label>
          <span>Assigned To</span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </>
  );
};



