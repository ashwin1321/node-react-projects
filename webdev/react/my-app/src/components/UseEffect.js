// use effect is a hook that allows us to perform side effects in functional components

import React, {useState, useEffect} from 'react'

const UseEffect = () => {
    const [counter, setCounter] = useState(0)     /*  yesle chai counter lai 2 value dinxa ani eauta function hunxa*/
    // var counter = 1
    useEffect(() => {               // this is a hook that allows us to perform side effects in functional components
        console.log("running", counter)
    }, [counter])     // counter array nadida chai 1st render ma matra log hune bho mathi ko else harek change ma log hune bho
    
    function increase() {
        // setCounter(counter + 1)
        setCounter(oldCounterValue => oldCounterValue + 1)
    }
    function decrease() {
        // setCounter(counter - 1)
        setCounter(oldCounterValue => oldCounterValue - 1)
        if (counter <= 0) {
            setCounter(0)
        }
    }
  return (
    <>
    <br />
    <h1>UseEffect</h1>
    <h1>counter : {counter}</h1>
    <button onClick={increase}>increase</button> 
    <button onClick={decrease}>decrease</button>

  </>
  )
}

export default UseEffect
