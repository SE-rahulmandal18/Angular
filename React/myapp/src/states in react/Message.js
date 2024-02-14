import React, { Component } from 'react'

export class Message extends Component {
  
    constructor() {
        super();
        this.state = {
            message:'Wecome Visitor....'
        }
        this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage() {
        console.log('onClick event handler called...');
        // not possible to update using sate method
        // this.state.message = 'Thank you for subscribing...';
        console.log(this);  // to check undefined , because changeMessage not bind 

        this.setState({
            message:'Thank you for subscribing'
        });
    } 

    changeMessage2 = (event, param) => {
        console.log(event);
        console.log('changeMessage2 gets called onClick');
        this.setState({
            message:`Thank you for subscribing...with Param= ${param}`
        });
    } 



    render() {
        const param = 20;
    return (
      <div>
        <h2> {this.state.message}</h2>
        <button onClick={(e) => this.changeMessage2(e,param)}>
            Subscribe</button>
      </div>
    )
  }
}

export default Message