import React, { Component } from 'react';
import { connect } from 'react-redux';
import addTodo from './todoAction.js';

class Todo extends Component {

  render() {
    return (
      <div>
	<h3>Todo List:</h3>
	<form onSubmit={this.props.addTodo}>
	  <input
	    type="text"
	    placeholder="Add your todo here:"
	    />
	</form>
	<div>
	  {this.props.todos.map(todo => <div>{todo}</div>)}
	</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { todos: state }
}

export default connect(mapStateToProps, { addTodo })(Todo)


