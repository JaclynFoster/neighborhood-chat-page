import React from 'react'
import NavBar from './NavBar'

const Layout = props => {
  return (
    <div className="background">
      <NavBar />
      {props.children}
    </div>
  )
}

export default Layout
