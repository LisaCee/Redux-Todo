import React, { Component } from 'react';
import {connect} from 'react-redux';
import '.components/Todo.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul>
        <li>
          <h3>Todos:</h3>
          {this.props.todos.map(todo, i => {
            return <li key={i}> {todo}</li>
          })}
          </li>
        </ul>
        <TodoList/>
      </div>
    );
  }
}

export default  connect(mapStateToProps, {addTodo})(App);
