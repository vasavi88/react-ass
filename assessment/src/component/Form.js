import React, { Component } from 'react';
import MockData from '../mock/AppMock';
import EditData from '../component/EditData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { uuid } from 'uuidv4';
import TodoInput from './common/TodoInput';
import TodoButton from './common/TodoButton';

class Form extends Component {
  state = {
    list: [],
    content: '',            //by default content is empty
    data: [],
    count: uuid()                       ///creating state
  }

  handleChange = (e) => {

    this.setState
      ({
        content: e.target.value        ///  in input text type something that will add to content by using handle change method
      })
  }
  handleSubmit = (e) => { // after enter data click submit it will go to console after that input box will be empty 
    e.preventDefault();
    this.formdata(this.state);         //it is used to save data
    const data = this.state.data;
    const obj =
    {
      "name": this.state.content,
      "key": this.state.count
    };

    data.push(obj);

    this.setState({
      data, count: this.state.count + 1, content: ''          // content should be empty after click submit
    })
  }

  formdata = (content) => {
    content.id = uuid();
    const todos = [...this.state.list, content];    //add one by one data from list to todos
    this.setState({
      list: todos
    })

  }

  render() {
    return (
      <div className="addtodo">
        <form onSubmit={this.handleSubmit}>
          <TodoInput content={this.state.content} handleChange={this.handleChange} />
          <TodoButton name={this.props.Content.add} type="submit" />
        </form>
        <EditData data={this.state.data} />
      </div>
    );
  }
}

Form.defaultProps = { Content: MockData }
export default Form;