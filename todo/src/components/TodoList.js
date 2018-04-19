import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addtodo, toggleComplete } from '../actions';


class TodoList extends Component {
    state = {
        value: ''
    };

    handleChange = (event) => {
        this.setState( {value: event.target.value} )
    }

    handleSubmit = () => {
        const todo = { 
            value: this.state.value,
            completed: false,
            id: this.props.todos.length,
        }
        this.props.addtodo(todo);
        this.setState({value: ''});
    }

    render(){
        return (
            <div>
                <h1>To Do List</h1>
                <ul>
                    {this.props.todos.map( (todo, i) => {
                        const style = todo.completed ? "line-through" : "none";
                        const styles = { textDecoration: style };
                        return (
                            <li style={styles} onClick={()=> this.props.toggleComplete(todo)}>
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

export default connect(mapStateToProps, { addtodo, toggleComplete })(TodoList);
