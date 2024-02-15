import React, { Component } from 'react'
import RegCom from './RegCom'
import PureComp from './PureComp'

class App extends Component {

    state = {
        name: 'Rahul'
    }

    componentDidMount(){

        setInterval(
            () => {
                this.setState({
                    name: 'Rahul'
                })
            },
            2000
        )
    }

  render() {

    console.log('App component render method is called...');
    
    return (
      <div>
        <h1>Pure Component</h1>
        <RegCom/>
        <PureComp/>
      </div>
    )
  }
}

export default App