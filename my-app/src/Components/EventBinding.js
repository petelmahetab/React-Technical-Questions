import React, { Component } from 'react'

// approaches For binding An EVENTS HANDLERS
// 1.Use bind method
// 2. Use ARROW function
// 3. In contructor directly Create an WIth Bind with
// 4. Make OnClick method will be Arrow function without log of {this}. 
 class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello",
      }
      this.clickKrnepr=this.clickKrnepr.bind(this);
    }

    clickKrnepr=()=>{
        this.setState({
            message: "Hey, you have done your binding using the bind method.",
        });
        // console.log(this);
    }
    
  render() {
    return (
      <div>
          <h1>In this component we are doing EventBinding with Different approaches.</h1>
          <p>{this.state.message}</p>
          <button onClick={this.clickKrnepr}>Click ME</button>
      </div>
    )
  }
}
export default EventBinding;