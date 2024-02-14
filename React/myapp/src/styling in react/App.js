import React from 'react'
import './appStyle.css'
import Inline from './Inline'
import ConditionalStyling from './ConditionalStyling'

const App = () => {
  return (
    <div>
        <h1 className='error'>Error</h1>
        {/* <Inline/> */}
        <ConditionalStyling primary={true}/>
    </div>
  )
}

export default App