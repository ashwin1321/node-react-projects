import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

const ReactRouter = () => {
  return (

    <BrowserRouter>
   <div>

    <nav>
        <Link to="/hello">go to hello route</Link>
        <Link to="/">go home</Link>
    </nav>

    <Route path="/hello" exact >
        <h1>React Router</h1>
    </Route>
    <Route path="/" exact>
        <h1>React Router home page</h1>
    </Route>

   </div>
    </BrowserRouter>

  )
}

export default ReactRouter
