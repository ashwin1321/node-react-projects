import React from 'react'

const Custom = (props) => {
  return (
    <div>
      <h1>hello this is Custom props  {props.name}</h1>         {/* accessing props.  name is passed in the app file with custom componenet */}
    </div>
  )
}

export default Custom
