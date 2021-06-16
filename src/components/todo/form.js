import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from 'react-bootstrap';

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



  return (
    <>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <label>
              <span>To Do Item</span>
              <input name="text"
                placeholder="Add To Do List Item"
                onChange={handleInputChange}>
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

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Card.Body>
        </Card>
      </Form>
    </>
  );
};



