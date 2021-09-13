
import React, { Component } from 'react'
class TodoInput extends Component {
    render() {
        return (
            <input onChange={this.props.handleChange}
                type="text"   
                value={this.props.content} />
        );
    }
}
 export default TodoInput;

 