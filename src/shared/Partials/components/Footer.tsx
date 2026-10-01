import { profile } from '../../../data/resume'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}

export default Footer
