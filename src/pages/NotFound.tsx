import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="container not-found">
      <h1 className="hero-name">Page not found</h1>
      <p className="hero-lede">There is nothing at this address. The portfolio is all on one page.</p>
      <Link to="/" className="button button-primary">Go to the portfolio</Link>
    </main>
  )
}

export default NotFound
