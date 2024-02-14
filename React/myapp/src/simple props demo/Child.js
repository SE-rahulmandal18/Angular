import React, { Component } from 'react'

export class Child extends Component {
  render() {
          
     let {firstName, lastName, address,children} =  this.props;
    console.log(children);
    return (
      <div>
       <h2>{firstName} {lastName} {address}</h2>
       {/* {this.props.children[1]} */}
       {children[0]}
      </div>
    )
  }
}

Child.defaultProps ={
    firstName:'John',
    lastName:'Doe',
    address:'USA'
}

export default Child