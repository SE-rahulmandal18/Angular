import React from 'react'
import './myStyle.css'

const ConditionalStyling = ({primary}) => {

    let cName = primary?'primary' :''; 

  return (
    <div>
        <h1 className='error'>Conditional Styling</h1>
        
        <h3 className={`${cName} font-xl`}>
        Applying Conditional Styling...</h3>
        </div>
  )
}

export default ConditionalStyling