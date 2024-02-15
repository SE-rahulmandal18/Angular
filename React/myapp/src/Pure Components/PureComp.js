import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {

    // shouldComponentUpdate

  render() {

    console.log('Pure component render method is called...');

    return (
      <div>PureComp</div>
    )
  }
}

export default PureComp