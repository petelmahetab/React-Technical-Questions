// import React, { Component } from 'react';
// import './PerformingALLOperation.css';

// class PerformingALLOperation extends Component {
//    constructor(props){
//        super(props)
//        this.state={
//            count:1,
//        }
//    }
//    incre=()=>{
//        this.setState({count:this.state.count+1});
//     //    if(this.count <0){
//     //        return;
//     //    }
//     }
//    decre=()=>{
//        this.setState({count:this.state.count-1});
      
//     }
//     }
//     // multi=()=>{
//     //     this.setState({count:this.state.count * (this.state.count-1)});
//     //  }
//      multi = () => {
//         this.setState({ count: this.state.count * this.state.count - 1 });
//       };
      
//    reset=()=>{
//        this.setState({count:1});
//     };

//   render() {
//     return (
//       <div className='Container'>
//          <h1>Here is Your Count  :- {this.state.count}</h1>
//          <div className='buttons'>
//          <button onClick={this.incre}>Increment </button>
//          <button onClick={this.decre}>Decrement </button>
//          <button onClick={this.multi}>Multiplication </button>
//          </div>
//           <button className='reset-button' onClick={this.reset}>Reset</button>
//       </div>
//     );
//   }
// }

// export default PerformingALLOperation;

import React, { Component } from 'react';
import './PerformingALLOperation.css';

class PerformingALLOperation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  incre = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decre = () => {
    this.setState({ count: this.state.count - 1 });
  };

  multi = () => {
    this.setState({ count: this.state.count * this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 1 });
  };

  render() {
    return (
      <div className="Container">
        <h1>Here is Your Count  :- {this.state.count}</h1>
        <div className="buttons">
          <button onClick={this.incre}>Increment</button>
          <button onClick={this.decre}>Decrement</button>
          <button onClick={this.multi}>Multiplication</button>
        </div>
        <button className="reset-button" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default PerformingALLOperation;



