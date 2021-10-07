import React, { useState } from 'react'
import Output from './Output'
const Greet = () => {
    const [ changeText, setChangeText] = useState(false)

    const changeTextHandler = ()=>{
        setChangeText(true)
    }
    return (
        <div>
            <h2>Hello Kams!</h2>
           { changeText?  <Output>Something cool</Output> : <Output>Will we win the IPL trophy this year?</Output>}
            <button onClick={changeTextHandler} >Changes text</button>
        </div>
    )
}

export default Greet
