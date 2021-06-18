import React from  'react'
import {Link} from 'react-router-dom'

export default function Navbar(){

    const hideSidebar = ()=>{
        const sidebar = document.getElementById('sidebar')
        sidebar.classList.toggle('active')
    }

    return (
        <div >
            <input type="checkbox" id="toggler"/>
            <label htmlFor="toggler" id="toggle" onClick={() => hideSidebar()}>☰</label>
            <nav id="sidebar">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
        </div>
    )
}