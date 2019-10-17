import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.svg'

//import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <img src={logo} className="App-logo" alt="logo" style={imageStyle} />
            <h1>React TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/About">About</Link>
        </header>
    )
}

const headerStyle = {
    background : '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#ffffff'
}

const imageStyle = {
    maxWidth: '50%',
    maxHeight: '100%'
}