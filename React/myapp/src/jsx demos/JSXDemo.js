import React from "react"

import '../jsx demos/jsxpages.css';

// function buttonTextFunction()
// {
//     return 'Click Here';
// }

function JSXDemo() {
    const buttonText = 'Submit';
    return(
        <div style={{border:'2px solid red'}}>
            <label className="label"> Enter Name: </label>
            <input type="text" id="name"/>
            <button style={{backgroundColor:'blue', color:'white'}}>
                {/* {"Please "+buttonTextFunction()} */}
                {{buttonText}}
            </button>
        </div>
    )
}

export default JSXDemo