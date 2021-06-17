import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import NavBar from './Components/Navigation/NavBar'
import LandingPage from './Components/Landing/LandingPage'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import ProjectsPage from './Components/Projects/ProjectsPage'
import GameOfLife from './Components/Projects/Life'

export default function Routes(){
    return(
        <Router >
                <NavBar />
                <Route path='/' exact component={LandingPage}/>
                <Route path='/about' exact component={AboutMe}/>
                <Route path='/projects' exact component={ProjectsPage}/>
                <Route path='/projects/game-of-life' exact component={GameOfLife}/>
                <Route path='/contact' exact component={Contact}/>
        </Router >
    )
}