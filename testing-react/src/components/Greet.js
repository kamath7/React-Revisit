import React, { useState } from 'react'

const Greet = () => {
    const [ changeText, setChangeText] = useState(false)

    const changeTextHandler = ()=>{
        setChangeText(true)
    }
    return (
        <div>
            <h2>Hello Kams!</h2>
           { changeText?  <p>Something cool</p> : <p>Will we win the IPL trophy this year?</p>}
            <button onClick={changeTextHandler} >Changes text</button>
        </div>
    )
}

export default Greet
