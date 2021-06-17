import React, { useState, useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import useForm from 'react-bootstrap';

export default function TodoForm(props) {
  const initialState = {}
  const [todo, setTodo] = useState(initialState);

  const handleInputChange = e => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(todo);
    setTodo(initialState)
  }

  // props.onSubmit({
  //   id: Math.floor(Math.random() * 10000),
  //   text: input
  // });
  // setInput('');


  return (
    <Form onSubmit={handleSubmit} className='todo-form'>
      <>
        <h3>Add Item</h3>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <label>
              <span>To Do Item</span>
              <input name="text"
                placeholder="Add To Do List Item"
                onChange={handleInputChange}
                className='todo input edit'>
              </input>
            </label>
            <label>
              <span>Difficulty Rating</span>
              <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
            </label>
            <label>
              <span>Assigned To</span>
              <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
            </label>

            <Button onClick={() => props.updatedItem()} className='todo-button edit' variant="primary" type="submit">
              update
            </Button>
          </Card.Body>
        </Card>
      </>
    </Form>
  );
}



