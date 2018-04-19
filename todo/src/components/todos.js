import React,{Component} from 'react';
import {connect} from 'react-redux';
class Todos extends Component {
    constructor(){
        super()
        this.state = {
            input: ''
        }

        render(){
            return (
                <div>
                    <form>
                    </form>

                    </div>

            )
        }
    }
}


export default connect()(Todos)