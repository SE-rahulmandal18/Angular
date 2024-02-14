
// import React from 'react'

// function Greet(props) {
// console.log(props);
//   return (
//     <div>
//          <h1>{props.greet} Gyus...</h1>
//      </div>
//   )
// }

// export default Greet



import React, { Component } from 'react'

export class Greet extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
           <h1>{this.props.greet}Guys...</h1>
      </div>
    )
  }
}

export default Greet