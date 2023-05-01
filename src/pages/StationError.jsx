import { Link, useRouteError } from "react-router-dom"


function StationError() {
    const error = useRouteError
  return (
    <div>
        <h1> Error finding Station</h1>
        <p> {error.message}</p>
        <Link to="/">GO back Home</Link>
    </div>
  )
}

export default StationError