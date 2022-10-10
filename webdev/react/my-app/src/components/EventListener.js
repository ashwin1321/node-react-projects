import React from 'react'



function buttonClick() {
  console.log("Event listeener button clicked")
}
const EventListener = () => {
  return (
    <div>
      <h1>this is event listener</h1>
      <button onClick={buttonClick}>Click me</button>
    </div>
  )
}

export default EventListener
