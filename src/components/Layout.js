import React from "react"
import Navbar from "./Navbar"
import { GlobalStyles } from "../styles/globalStyles"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <GlobalStyles />
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2021 Mehmet Sayin</p>
      </footer>
    </div>
  )
}
