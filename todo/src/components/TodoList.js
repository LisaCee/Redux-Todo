import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addtodo } from '../actions';



class TodoList extends Component {
    state = {
        todos: [
            {
                value: 'Walk the dog.',
                completed: false
            },
            {
                value: 'Walk the dog.',
                completed: false
            },
        ],
        value: ''
    };

    handleChange = (event) => {
        this.setState( {value:event.target.value} )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addtodo
    }


    render(){
        return (
            <div>
                <h1>To Do List</h1>
                <ul>
                    {this.state.todos.map( (todo, i) => {
                        return (
                            <li>
                                {todo.value}
                            </li>
                        )
                    })}
                    <input placeholder="New Todo" onChange={this.handleChange} value={this.state.value}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </ul>
            </div>

        );
        
    }
}

const mapStateToProps = (state) => {
    return { todos: state };
}

export default connect(mapStateToProps)(TodoList);
