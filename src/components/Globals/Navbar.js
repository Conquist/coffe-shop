import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [css, setCss] = useState("collapse navbar-collapse")
  const [links, setLinks] = useState([
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ])
  const navbarHandler = () => {
    console.log("menú abriendose/Cerrándose")
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </Link>
      <button onClick={navbarHandler} className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon" />
      </button>

      <div className={css}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => {
            return (
              <li key={link.id}>
                <Link className="nav-link" to={link.path}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
