import React, { Component } from 'react'
import UserDetails from './UserDetails';

export class UserList extends Component {

  render() {

    const names = ['John', 'Mark', 'Lisa', 'Andreson', 'Johnson'];
    
   const NameList = names.map(
    (name, index) => <li key={index} >  {index} {name} </li>)

    const person = [{

      id: 1,
      name: 'John',
      age: 25,
      skill: 'Angular'
    }, {
      id: 2,
      name: 'Maxwell',
      age: 32,
      skill: 'Cricket'
    }, {
      id: 3,
      name: 'Braod',
      age: 25,
      skill: 'React'
    }];
 
    const personList = person.map(
      person =>  <UserDetails key={person.id} person={person}/>
         );

    return (
      <div>
        <h2>List of User</h2>
        
        {/* {NameList} <br></br> */}
        
        {personList}

      </div>
    )
  }
}

export default UserList