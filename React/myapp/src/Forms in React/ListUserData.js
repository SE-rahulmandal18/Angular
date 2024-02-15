
import axios from 'axios'
import React, { Component } from 'react'

export class ListUserData extends Component {

    constructor() {
        super()

        this.state = {
            users: []
        }
    }

    async componentDidMount() {

        // method -> with promise

        // axios.get('http://localhost:3005/users')
        // .then(
        //     response => {        //console.log(response.data)
        //         this.setState({
        //             users: response.data
        //         },
        //         () => {
        //             console.log(this.state.users);
        //         })
        //     }
        // )

        // method with async and await
        try {
            const response = await axios.get('http://localhost:3005/users')
            this.setState({
                users: response.data
            })

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <h2>Listing the UserData</h2>
                {this.state.users.map(
                    (user) => (
                        <li key={user.id}> {user.id} {user.userName} {user.topic}</li>
                    )
                )}
            </div>
        )
    }
}

export default ListUserData