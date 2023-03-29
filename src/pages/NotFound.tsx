import { useState } from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

  return (
    <div className="not-found-page">
        <h1>Site Page Not Found</h1>
        <hr />
        <Link to="/">Go back home</Link>
    </div>
  )
}

export default NotFound
