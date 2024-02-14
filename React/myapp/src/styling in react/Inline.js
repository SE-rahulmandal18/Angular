import React from 'react'
import style from './appStyle.module.css'

const Inline = () => {

    const style1 = {
        fontSize:'40px',
        color:'blue',
        border: '2px dotted brown'
    }

  return (
    <div>
        <h1 className='error'>Inline</h1>
        <h2 
        style={style1}>
            Inline styling...</h2>

            <h2 className={style.error}>Module Level CSS</h2>
    </div>
  )
}

export default Inline