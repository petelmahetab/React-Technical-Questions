import React, { Component } from 'react'

class SubScribe extends Component {
    constructor(){
        super()
        this.state={
          message:"Yourtube",
          subcribers:"50k",
        }
    }
    changeMess(){
        this.setState({message:"Thank u for Subcribing.."})
    }
  render() {
    return (
      <div><h1>Welcome to {this.state.message} Channel.</h1>
      <button onClick={()=>this.changeMess()}>Subcribe</button>
      </div>
    )
  }
}
export default SubScribe;
