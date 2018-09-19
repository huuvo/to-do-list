import React, { Component } from 'react';
import './App.css';
import UserList from './component/UserList'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
          <h1 className className='float-left' > List Users</h1>
           <div className='clearfix'>
             <button className='btn btn-outline-danger  float-right'>Add User</button>
           </div>
           <div className='container'>
              {this.props.children}
            </div>
        </div>
      </div>
    );
  }
}
export default App;
