import React, { Component } from 'react';
import { connect } from 'react-redux';
import addTodo from './todoAction.js';

class Todo extends Component {
	constructor() {
		super();
		this.state = {
			newTodo: ""
		}
	}

	handleChange = (e) => {
		this.setState({ newTodo: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.newTodo);
		this.setState({ newTodo: ""});
	}

  render() {
    return (
      <div>
				<h3>Todo List:</h3>
				<form onSubmit={ this.handleSubmit }>
					<input
						type="text"
						placeholder="Add your todo here:"
						value={this.state.newTodo}
						onChange={this.handleChange}
						/>
				</form>
				<ul>
					{this.props.todos.map(todo => {
					return (<li key={todo}>
						{todo}
					</li>)
				})}
				</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { todos: state }
}

export default connect(mapStateToProps, { addTodo })(Todo)


