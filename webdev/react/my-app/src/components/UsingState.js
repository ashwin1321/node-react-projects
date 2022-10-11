import React, {useState} from 'react'


const UsingState = () => {
    const [counter, setCounter] = useState(0)     /*  yesle chai counter lai 2 value dinxa ani eauta function hunxa*/
    // var counter = 1
    
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
    <h1>UsingState</h1>
    <h1>counter : {counter}</h1>
    <button onClick={increase}>increase</button> 
    <button onClick={decrease}>decrease</button>

  </>
  )
}

export default UsingState
