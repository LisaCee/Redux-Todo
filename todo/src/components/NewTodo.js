import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';



class NewTodo extends Component {
   
    render() {
        return (
            <div>
                <input placeholder='Add New Todo'/>
            </div>
        );
    }
}


export default NewTodo;