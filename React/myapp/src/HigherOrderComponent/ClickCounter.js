import React, { Component } from 'react'
import withCounter from './withCounter';

export class ClickCounter extends Component {

    //  state = {
    //     count: 0
    //  }

    //  clickHandler =() =>{
    //     this.setState ( prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    //  }

    render() {

        let {count,incrementHandler} = this.props;  // cathching pros from withCounter

        return (
            <div>
                <h2>ClickCounter</h2>
                <button onClick={incrementHandler}>  
                    Clicked {count} times
                </button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)