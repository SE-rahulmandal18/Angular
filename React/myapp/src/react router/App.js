import React from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';

const HomeComponent = (props) => {
    console.log(props);
    return (
        <div>{props.greet}Home Page</div>
    )
}

const AboutComponent = () => {
    return (
        <div>About us Page</div>
    )
}

const ContactComponent = () => {
    return (
        <div>Contact us Page</div>
    )
}

const ErrorComponent = () => {
    return (
        <div>Error: Page Not Found!</div>
    )
}

const users = [{
    id: '123',
    name: 'James'
},{
    id: '453',
    name: 'John'
},{
    id: '553',
    name: 'Mark'
}];

const UsersComponent = () => {
    return (
        <div>
            {users.map(user => (
                <li key={user.id}> {JSON.stringify(user)}</li>
            ))}
        </div>
    )
}

const UserComponent = (props) =>  {

    const userId = props.match.params.userId;
    console.log(props);
    console.log(userId)

    return(

        <div>
            <h5> { users.filter(user => user.id === userId).map(user => user.name)}</h5>
        </div>
    )
}



const App = () => {
    return (
        <div>
            <Link to="/home">Home</Link>&nbsp;&nbsp;
            <Link to="/about">About</Link>&nbsp;&nbsp;
            <Link to="/contact">Contact</Link>&nbsp;&nbsp;
            <Link to="/users">Users</Link>&nbsp;&nbsp;

            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomeComponent greet="Good Morning " />} />
                <Route path="/about" element={<AboutComponent />} />
                <Route path="/contact" element={<ContactComponent />} />
                <Route path="/users" element={<UsersComponent />} />
                <Route path="/user/:userId" element={<UserComponent />} />
                <Route path="*" element={<ErrorComponent />} />
            </Routes>
        </div>
    );
}

export default App;
