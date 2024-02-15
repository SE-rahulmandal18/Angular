import React, { Component } from 'react'
import { ButtonContextConsumer } from './myContext'


class ThemedButton extends Component {
    render() {
        return (
            <div>

                <ButtonContextConsumer>

                    {
                        (theme) => (
                            <button
                                style={{ backgroundColor: `${theme}` }}
                            >Click Here</button>
                        )
                    }

                </ButtonContextConsumer>



            </div>
        )
    }
}

export default ThemedButton