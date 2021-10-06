import { Link } from "gatsby"
import React from "react"
import Nav from "../styles/Navbar"

export default function Navbar() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </Nav>
  )
}
