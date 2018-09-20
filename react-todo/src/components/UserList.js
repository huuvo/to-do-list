import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppCount from './AppCount'
import UserRow from './UserRow'

class UserList extends Component {
  constructor (props) {
    super(props)
    this.state = {  users: [
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

    this.handleChangeId = this.handleChangeId.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

handleChangeId (e) {
    this.setState({
      id: e.target.value
    })
  }

  handleChangeName (e) {
    this.setState({
      name: e.target.value
    })
  }

 handleSubmit (e) {
    e.preventDefault()

    let user = {
        id:  this.state.id,
        name: this.state.name,
      }
      this.setState({
        users: [...this.state.users, user]

      });

  }

  deleteRow (key) {
    let users = [...this.state.users];
    users.splice(key, 1);
    this.setState( {users} );
  }

  editRow (id, name) {
    let usersList = this.state.users;
     document.getElementById('id').value= usersList[id].id;
    document.getElementById('nameUser').value= usersList[id].name;

  }

  fetchRows () {
    if (this.state.users instanceof Array) {
      return this.state.users.map( (object, i) => {
        return <UserRow obj={object} key={i} index={i} deleteRow={ this.deleteRow.bind(this) }
                 editRow={this.editRow.bind(this),this.editRow.bind(this) } />
      })
    }
  }

  render () {
    return (
      <AppCount>
        <h1>Users</h1>
        <div className='clearfix'>
           <h1>Add User</h1>

        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>ID</label>
        <input type='id' name='form-control' id='id'
              value={this.state.id} onChange={this.handleChangeId} required />
        </div>

        <div className='form-group'>
          <label>Name</label>
           <input type='name' name='form-control' id='nameUser'
              value={this.state.name} onChange={this.handleChangeName} required />
        </div>

          <button type='submit' className='btn btn-primary'>Add List</button>
        </form>
          </div><br />
        <table className='table table-hover'>

          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td colspan="2">Actions</td>
            </tr>
          </thead>

          <tbody>
            {this.fetchRows()}
          </tbody>

        </table>
      </AppCount>
    )
  }
}
export default UserList
