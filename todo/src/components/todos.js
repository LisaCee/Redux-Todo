import React,{Component} from 'react';
import {Form,Button,Label,Input,FormText} from 'reactstrap';
import {connect} from 'react-redux';
import {addTodo,getTodos} from '../actions/actions';



class Todos extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            todo: ''
        }
    }


        handleSubmit = () => {
            this.props.addTodo(this.state.title,this.state.todo)
        }

        handleTitleChange = (e) => {
             this.setState({title:e.target.value})
        }

        handleTodoChange = (e) => {
            this.setState({todo:e.target.value})
       }

        render(){
            console.log(this.props)
            return (
                <div>
                    <Form>
                        <Input  value = {this.state.title} onChange = {this.handleTitleChange} type = "text" name = "title" id = "title"/>
                        <Input value = {this.state.todo} onChange = {this.handleTodoChange} type = "textarea" name = "todo" id = "todo"/>
                        <Button onClick = {this.handleSubmit}>Submit</Button>
                        </Form>
                        <h2> Todos </h2>
                        <ul>

                    {this.props.todos.map((todo)=> {
                        return (
                            <li key = {todo.title}>
                                {todo.title}
                            </li>
                        )
                    })}
                    </ul>
                </div>

            )
        }
    }

const mapStateToProps = (state) => {
    console.log(state)
   return  { 
       todos:state
       
    }
}

export default connect(mapStateToProps,{addTodo,getTodos})(Todos)