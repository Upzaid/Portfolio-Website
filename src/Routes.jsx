import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import NavBar from './Components/Navigation/NavBar'
import LandingPage from './Components/Landing/LandingPage'

export default function Routes(){
    return(
        <Router >
                <NavBar />
                <Route path='/' exact component={LandingPage}/>
                <Route path='/about' exact/>
                <Route path='/projects' exact/>
                <Route path='/contact' exact/>
        </Router >
    )
}