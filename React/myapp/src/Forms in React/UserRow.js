import axios from 'axios'
import React, { Component } from 'react'

class UserRow extends Component {

    deleteUser = () => {
        axios.delete(`http://localhost:3005/users/${this.props}`)
            .then(
                response => console.log(response)
            )
            .catch(
                error => console.error(error)
            )

    }


    render() {
        let { user } = this.props;
        return (
            <tr>
                <td>{user.id}</td>
                <td>{user.userName}</td> 
                <td>{user.comments}</td>
                <td>{user.topic}</td>
                <td><button onClick={this.deleteUser} className='btn btn-danger'>Dlete</button></td>
            </tr>
        )
    }
}

export default UserRow