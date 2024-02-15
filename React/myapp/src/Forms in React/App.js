import React from 'react'
import UncontrolledForm from './UncontrolledForm'
import ControlledForm from './ControlledForm'
import ListUserData from './ListUserData'

const App = () => {
  return (
    <div>
        <h1>React Forms</h1>
        {/* <UncontrolledForm/> */}
        <ControlledForm/>
        <ListUserData/>
    </div>
  )
}

export default App