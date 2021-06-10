import React, {useState} from 'react'
import LandingPage from './Landing/LandingPage'
import NavBar from './Navigation/NavBar'

export default function Website (){

    const [content, setContent] = useState(<LandingPage />)

    return(
        <div className="site">
            <NavBar />
            <div className="content-container">
                {content}
            </div>
        </div>
    )
}