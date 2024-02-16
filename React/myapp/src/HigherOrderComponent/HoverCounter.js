import React, { Component } from 'react'
import withCounter from './withCounter';

export class HoverCounter extends Component {

    // state = {
    //     count: 0
    //  }

    //  MouseOverHandler =() =>{
    //     this.setState ( prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    //  }


    render() {

        let {count,incrementHandler} = this.props;  // cathching pros from withCounter

        return (
            <div>
                <h1>Mouse Over Counter</h1>
                <h3 onMouseOver={incrementHandler}>
                     On Mouse Over {count} times</h3>
            </div>
        )
    }
}

export default withCounter(HoverCounter)