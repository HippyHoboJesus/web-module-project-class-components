import React from 'react'
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Feed Cat',
          id:1,
          completed: false
        },
        {
          task:'Learn React',
          id:2,
          completed: false
        }
      ]
    }
  }

  handleAdd = (task) => {

    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return todo.completed === false
      })
    })
  }

  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>
        <TodoList handleToggle={this.handleToggle} todos={todos}/>
        <Form handleAdd={this.handleAdd}/>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
