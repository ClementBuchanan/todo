import React, { useState, useEffect, useContext } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import superagent from 'superagent';
import useAjax from '../../hooks/ajax.js';
import { Context } from '../../context.js';

import './todo.css';

export default function ToDo() {
  const context = useContext(Context);
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  console.log(context);
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
  const { setOptions, response, options } = useAjax();

  const submitUpdate = (value) => {
    // updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  const addItem = async (item) => {
    // const response = await superagent.post('https://api-js401.herokuapp.com/api/v1/todo').send(item);
    setOptions({
      url: 'https://api-js401.herokuapp.com/api/v1/todo',
      method: 'post',
      data: item,
    });
    // setList([...list, response]);
  };

  const updateItem = async (item) => {
    item.complete = !item.complete;

    setOptions({
      url: `https://api-js401.herokuapp.com/api/v1/todo/${item._id}`,
      method: 'put',
      data: item,
    });
  };

  const deleteItem = async (_id) => {
    setOptions({
      url: `https://api-js401.herokuapp.com/api/v1/todo/${_id}`,
      method: 'delete',
    });

    const filteredList = list.filter((i) => i._id !== _id);

    setList(filteredList);
  };

  useEffect(() => {
    if (options.method === 'post') {
      setList([...list, response.data]);
    }
    if (options.method === 'put') {
      const filteredList = list.filter((i) => i._id !== response.data._id);
      setList([...filteredList, response.data]);
    }
  }, [response]);

  useEffect(() => {
    setCount(list.filter((item) => !item.complete).length);
  }, [list]);

  useEffect(() => {
    async function initialData() {
      const response = await superagent.get(
        'https://api-js401.herokuapp.com/api/v1/todo'
      );
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
      <div className="ToDoCounterDiv">
        <h2>There are {count} Items To Complete</h2>
      </div>
      <button onClick={() => context.setShowCompleted(!context.showCompleted)}>
        Toggle Completed Items
      </button>
      <select onChange={(e) => context.setSortFactor(e.target.value)}>
        <option value="">unsorted</option>
        <option value="difficulty">Difficulty</option>
        <option value="completed">Completed</option>
      </select>
      <section className="todo">
        <div>
          <TodoForm handleSubmit={addItem} updateItem={updateItem} />
        </div>

        <div>
          <TodoList
            handleDelete={deleteItem}
            list={list}
            handleComplete={updateItem}
            setEdit={setEdit}
          />
        </div>
      </section>
    </>
  );
}
