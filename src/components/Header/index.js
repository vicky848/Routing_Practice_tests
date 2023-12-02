// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-bar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
      className="wave-image"
    />
    <h1 className="heading">Wave</h1>
    <ul className="list-item">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
