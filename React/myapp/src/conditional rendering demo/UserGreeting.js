import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor() {
        super();

        this.state = {

            isLoggedIn: true
        }
    }

    clickHandler() {
        // console.log('clickHandler method called...');

        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }


    render() {

        // conditional operator example
        return (
            <div>

             <button onClick={() => this.clickHandler()}>Toggle</button>

            {this.state.isLoggedIn ? <h3>Welcome Rahul</h3> : <h3>Welcome Guest</h3> }
           
            </div>
        );



        // Example 2 if -else
        //    if(this.state.isLoggedIn){
        //     return <h3>Welcome Rahul</h3>
        //    }else{
        //     return <h3>Welcome Guest</h3>
        //    }

        // simple example
        // return (
        //   <div>
        //     <h2>User Greeting</h2>
        //     <h3>Welcome Rahul</h3>
        //     <h3>Welcome Guest</h3>
        //     </div>
        // )
    }
}

export default UserGreeting