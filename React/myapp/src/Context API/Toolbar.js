import React, { Component } from 'react'
import ThemedButton from './ThemedButton'
import { ButtonContext } from './myContext'

 class Toolbar extends Component {

    static contextType = ButtonContext;

  render() {
  console.log(this.context);

    return (
      <div>
           <ThemedButton/>
        </div>
    )
  }
}




export default Toolbar