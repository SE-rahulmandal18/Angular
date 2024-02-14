import React, { Component } from 'react'

export class Child extends Component {

    state = {
        childName: 'Rahul Mandal'
    }

    render() {
        console.log(this.props);

        let {clickHandler} = this.props;
        let {childName} = this.state;

        return (

            <div>
                {/* <button onClick={() => this.props.clickHandler(this.state.childName)}> Get Child</button> */}
                <button onClick={() => clickHandler(childName)}> Get Child</button>
            </div>
        )
    }
}

export default Child