import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from 'react-bootstrap';

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



  return (
    <>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
              </Button>
          </Card.Body>
        </Card>
      </Form>
      {/* <label>
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
      </form> */}
    </>
  );
};



