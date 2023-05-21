import React from 'react'
import { Link } from 'react-router-dom'
import './Layout.css'
import picture from '../../images/app-logo.png'

const NavBar = () => {
    return(
        <div className="nav">
            <img alt="Block Banter Logo" className="logo" src={picture}/>
            <nav className="nav">
            <h1 className="title">Block Banter</h1>
               <Link className="link" to="/">Home</Link>
               <Link className="link" to="/blog">Blog</Link>
               <Link className="link" to="/chat">Chat</Link>
               <Link className="link" to="/login">Login</Link>
            </nav>
        </div>
    )
}

export default NavBar