import React, { Component } from 'react'
import Todos from './components/Todos'
import logo from './logo.svg'
import axios from 'axios'

export class App extends Component {
  state = {
    todos : [
       {
        id: 1,
        title: "task 1",
        completed: true
      },
      {
        id: 2,
        title: "task 2",
        completed: false
      },
      {
        id: 3,
        title: "task 3",
        completed: false
      }
    ]  
  }

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  
  delTodo = id => {
    console.log(`delete ${id}`);

    //Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    // .then(res => this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.id !== id)]
    // }));
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo}/>
      </div>
    )
  }
}

export default App

