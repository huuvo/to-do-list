import React, { Component } from 'react';

class UserRow extends Component {
  constructor (props) {
    super(props)

  }
  render () {
    return (
      <tr>
        <td>
          {this.props.obj.id}
        </td>
        <td>
          {this.props.obj.name}
        </td>
        <td >
          <button className='btn btn-primary' onClick={() => this.props.editRow(this.props.obj.id,this.props.obj.name)}>Edit</button>
        </td>
        <td>
          <button className='btn btn-danger' onClick={() => this.props.deleteRow(this.props.index)}>Delete</button>
        </td>
      </tr>
    )
  }
}

export default UserRow
