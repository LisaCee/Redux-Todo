import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Actions/actions';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            todoText: ''
        };
    }

    handleFormInput = e => {
        this.setState({[e.target.TodoItem]: e.target.value})
    };

    buttonAddTodo = e => {
       const { todoText } = this.state
        const newTodoList = {
            todoText,
            completed: false
        };
        this.props.addTodo(newTodoList);
        this.setState({ todoText: '' });
    };

    render(){
        return (
            <div>
                <form>
                    <input placeholder="Add to the list" todoItem="text" onChange={this.handleFormInput} value={this.state.todoText} />
                    <button onClick={this.buttonAddTodo} type="button">
                        Add your todo item to the list
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      todos: state.todos
    };
  };

  export default connect(mapStateToProps,{addTodo})(TodoList);