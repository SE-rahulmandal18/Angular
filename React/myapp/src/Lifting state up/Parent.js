import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {

    // another way to define a state without using constructor
    state = {

        parentName: 'Mandal Ji',
        childName: null

    }


    getChildName = (name) => {
    console.log(name);
    this.setState({
        childName:name
    })
    }


    render() {
        return (
            <div>
                <h1>Passing Event Handler as a prop to Child Component</h1>
                <h3>Parent Name: {this.state.parentName}</h3>
              
                <Child clickHandler={this.getChildName}/>
              
               {this.state.childName ? <h3>Child Name: {this.state.childName}</h3> : ''} 
            </div>
        )
    }

}

export default Parent