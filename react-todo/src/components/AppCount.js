import React, { Component } from 'react'

class AppCount extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default AppCount
