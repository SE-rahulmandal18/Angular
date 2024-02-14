import React, { Component } from 'react'

export default class Clock extends Component {

    constructor() {
        console.log('constructor is called...');
       super();

       this.state = {
        time: new Date().toLocaleTimeString()
       }
    }

    componentDidMount() {
        console.log('componentDidMount is called....');
        setInterval(
            () => {
                // console.log('Hi');
                this.setState({
                    time: new Date().toLocaleTimeString()
                })
            },
            1000
        );
       
    }


    componentDidUpdate() {
        console.log('componentDidUpdate is called....', this.state.time);
    }

  componentWillUnmount() {
    console.log('componentWillUnmount is callled');
  }

  render() {
    console.log('render is called');
    return (
      <div>
       <h2>Time: {this.state.time}</h2>
        

      </div>
    )
  }
}
