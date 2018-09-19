import React, { Component } from 'react';
import './App.css';
import App from './App'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      array: [
        {
          id: 1,
          name: "Võ Hồng Hữu",
          Email:"honghuudl@gmail.com",
        },
        {
          id: 2,
          name: "Nguyen Van A",
          Email:"fdsfsdfsdfsd@gmail.com",
        },
        {
          id: 3,
          name: "Nguyen Van AT",
          Email:"fdsfsdfsdfsd@gmail.com",
        },
        {
          id: 4,
          name: "Nguyen Van AH",
          Email:"fdsfsdfsgdfsd@gmail.com",
        },
        {
          id: 5,
          name: "Nguyen Van AS",
          Email:"fdsfsdfsdfsd@gmail.com",
        },
        {
          id: 5,
          name: "Nguyen Van AS",
          Email:"fdsfsdfsdfsd@gmail.com",
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
      <div className="container top">
        <h1 className className='float-left' > List Users</h1>

       <div className='clearfix'>
         <button className='btn btn-outline-danger  float-right'>Add User</button>
       </div>

      <table className='table table-hover'>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td colspan="2" >Actions</td>
            </tr>
          </thead>
          <tbody>
          <tr>
             <td>
                {this.state.array[0].id}
             </td>
             <td>
              {this.state.array[0].name}
             </td>
             <td>
              {this.state.array[0].Email}
             </td>
             <td>
               <button className='btn btn-primary'>Edit</button>
             </td>
             <td>
               <button className='btn btn-danger'>Delete</button>
             </td>
          </tr>
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default UserList;
