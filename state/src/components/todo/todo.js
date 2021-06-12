import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';

function ToDo(props) {

  const [list, setList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([list, item]);
  };

  const _toggleComplete = async id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;

      let url = `${ToDo}/${id}`;
      let input = {
        text: item.text,
        assignee: item.assignee,
        dissiculty: item.difficulty,
        is: item.id,
        complete: item.complete,
        delete: item.handleComplete
      }

      //update
      let updateItem = await requestAnimalFrame(url, 'put', input);
      setList(list.map(listenItem._id === item._id ? updateItem.item : listenItem));

      // let list = list.map(listItem => listItem._id === item._id ? item : listItem);
      // this.setState({ list });
    }
  };

  componentDidMount() {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    this.setState({ list });


    const toggleComplete = id => {

      let item = list.filter(i => i._id === id)[0] || {};

      if (item._id) {
        item.complete = !item.complete;
        let newlist = list.map(listItem => listItem._id === item._id ? item : listItem);
        setList(newlist);
      }
    };

    //remove 
    const removeItem = id => {
      let item = list.filter(i => i._id === id)[0] || {};
      if (item._id) {
        let url = `${todoapi}/${id}`;

        axios.delete(url, item)
          .then(removeItem => {

            let temp = [...list];

            for (let i = temp.length - 1; i >= 0; i--) {
              if (removeItem.data._id === temp[i]._id) {
                temp.splice(i, 1);
              }
            }
            setList(temp);
          })
          .catch(console.error);
      }
    };

    useEffect(() => {
      console.log(data);

      if (data && data.results) {
        setList(data.result);
      }
    }, [data]);

    useEffect(() => {
      _getTodoItems()
    }, []);

    return (
      <>
        <header>
          <h2>
            There are {list.filter(item => !item.complete).length} items to complete
          </h2>
        </header>

        <section className="todo">

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </div>
        </section>
      </>
    );
  };
}

export default ToDo;