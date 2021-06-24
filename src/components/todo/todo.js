

import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import superagent from 'superagent';

import './todo.css';

export default function ToDo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [list, setList] = useState([])
  const [count, setCount] = useState(0)


  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  const addItem = async (item) => {
    const response = await superagent.post('https://api-js401.herokuapp.com/api/v1/todo').send(item);
    setList([...list, response.body]);
  };

  const updateItem = async (item) => {
    const response = await superagent.put('https://api-js401.herokuapp.com/api/v1/todo').send(item)
    console.log(response);
    const filteredList = list.filter(i => i._id === item._id)
    setList([...filteredList, response.body])
  }


  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
  };



  useEffect(() => {
    setCount(list.filter(item => !item.complete).length)
  }, [list])

  useEffect(() => {
    async function initialData() {
      const response = await superagent.get('https://api-js401.herokuapp.com/api/v1/todo');
      setList(response.body.results);
    }
    initialData();
  }, []);

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }


  return (
    <>
      <header>
        <span>Home</span>
      </header>
      <div className='ToDoCounterDiv'>
        <h2>
          There are {count} Items To Complete
        </h2>
      </div>
      <section className="todo">

        <div>
          <TodoForm handleSubmit={addItem} updateItem={updateItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
          />
        </div>
        {/* <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className='icons'>
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className='delete-icon'
            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className='edit-icon'
            />
          </div>
        </div> */}
      </section>
    </>
  );
};

