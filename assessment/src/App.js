import React, { Component } from 'react';
import './App.css';
import Form from './component/Form';
import MockData from './mock/AppMock';


class App extends Component {
  render() {
    return (
      <div className="container">
        {/* todo app heading */}
        <h1 ><center> {this.props.Content.heading}</center></h1>          
        <div>
          <div>
            <Form />
          </div>
        </div>

      </div>

    );
  }
}
App.defaultProps = { Content: MockData }
export default App;