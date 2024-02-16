import React, { useState } from 'react'

const HookExample1 = () => {

    let [fruit, setFruit] = useState('Banana')

    function changeFruitName() {

        if (fruit === 'Banana') {

            setFruit(
                fruit = 'Apple'
            )
        } else {
            setFruit(
                fruit = 'Banana'
            )
        }
    }

    return (
        <div>
            <h1>HookExample1</h1>
            <h2>Fruit Name: {fruit}</h2>
            <button onClick={changeFruitName}>Toggle Fruit Name</button>
        </div>
    )
}

export default HookExample1