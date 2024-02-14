import React, { Component } from 'react'

export class Counter extends Component {

    constructor(){
        super();

        this.state= {
            count: 0
        }
    }

     incrementCount(){
        // Async Method
        // this.setState({
        //     count:this.state.count+1
        // },() => {
        //     console.log(this.state.count);
        // })
       

        // updattion w.r.t prevState
        this.setState( (prevState) => ({
            count:prevState.count+1
        }),() => {
            console.log(this.state.count);
        })
       
    }
     
    incrementFive = () => {
      
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }


  render() {
    return (
      <div>Count {this.state.count}
      <button
    //    onClick={() => this.incrementCount()}>
       onClick={() => this.incrementFive()}>
        Increment Count</button>
        </div>
    )
  }
}

export default Counter