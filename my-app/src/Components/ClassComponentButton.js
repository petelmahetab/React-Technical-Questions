import React, { Component } from 'react'

class ClassComponentButton extends Component {
    click() {
        console.log("Button is clicked.")
    }
  render() {
    return (
      <div>
          <button onClick={this.click}>Click me Again</button>
      </div>
    )
  }
}

export default ClassComponentButton