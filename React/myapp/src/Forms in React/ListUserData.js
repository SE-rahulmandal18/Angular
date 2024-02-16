
import axios from 'axios'
import React, { Component } from 'react'
import UserRow from './UserRow'

export class ListUserData extends Component {

    constructor() {
        super()

        this.state = {
            users: [],
            flag: false
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
            const response = await axios.get('http://localhost:3005/users');
            this.setState({
                users: response.data,
                flag: true
            })

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <h2>Listing the User Data</h2>
                {this.state.flag?
                    <table className='table' >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Comments</th>
                                <th>Topic</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map(
                                (user) => (
                                    <UserRow key={user.id} user={user} />
                                )
                            )}

                        </tbody>
                    </table> : <h6>Jason Server is not running</h6>
                }
            </div>
        )
    }
}

export default ListUserData