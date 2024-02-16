import React, { Component } from "react";

const withCounter = (WrappperComponent) => {

    class NewComponent extends Component {

        state = {
            count: 0
        }

        incrementHandler = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render() {
            return(
                <WrappperComponent
                count={this.state.count}
                incrementHandler={this.incrementHandler}
                /> 
                
                // < <ClickCounter/> <HoverCounter/>
            )
        }

    }

    return NewComponent

}


export default withCounter