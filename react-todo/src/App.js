import React, { Component } from 'react';
import UserRow from './component/UserRow';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      array: [
        {
          id: 1,
          name: "Võ Hồng Hữu",
        },
        {
          id: 2,
          name: "Nguyen Van A",

        },
        {
          id: 3,
          name: "Nguyen Van AT",

        },
        {
          id: 4,
          name: "Nguyen Van AH",

        },
        {
          id: 5,
          name: "Nguyen Van AS",

        }
      ]
    };
  }
  fetchRows () {
    if (this.state.array instanceof Array) {
      return this.state.array.map( (object, i) => {
        return <UserRow obj={object} key={i} index={i}  />
      })
    }
  }
  render() {
    return (
      <div className="App">
      <div className="container top">
        <h1 className className='float-left' > List To Do</h1>

       <div className='clearfix'>
         <button className='btn btn-outline-danger float-right'>Add To Do</button>
       </div>

      <table className='table table-hover'>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td colspan="2" >Actions</td>
            </tr>
          </thead>
          <tbody>
             {this.fetchRows()}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}
export default App;
