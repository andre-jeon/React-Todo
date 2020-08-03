import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import "./components/Todo.css";


const tasks = [
  {
    task: 'Wake up', 
    completed: false
  }, 
  {
    task: 'Eat', 
    completed: false
  }, 
  {
    task: 'Code', 
    completed: false
  }, 
  {
    task: 'Sleep', 
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };

    toggleItem = id => {
      tasks: this.state.tasks.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    };
  };

  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>

        <div>
          <TodoList
            toggleItem={this.toggleItem}
            tasks={this.state.tasks}
          />
        </div>
      </div>
    );
  }
}

export default App;
