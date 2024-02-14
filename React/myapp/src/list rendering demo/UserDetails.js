import React from 'react'

function UserDetails({ person }) {
    let { name, age, skill } = person;
    return (
        <div>


            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Skill</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>John</td>
                        <td>25</td>
                        <td>Angular</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Maxwell</td>
                        <td>35</td>
                        <td>Cricket</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Broad</td>
                        <td>25</td>
                        <td>React</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default UserDetails
