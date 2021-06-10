import React from 'react'
import Github from '../../Assets/Github.svg'
import Twitter from '../../Assets/Twitter.svg'

export default function TitleCard(){
    return(
        <div className="title-card">
            <span className="font-3 bold">Zaid Lorea</span>
            <span className="font-2 bold">Full Stack Developer</span>
            <span className="font-3 bold">. . . . . . . . . . . . . . . . . . . . . .</span>
            <br />
            <span className="font-1 bold">HTML / CSS | Javascript | React | NodeJS | Python | MongoDB | SQL</span>
            <div className="social-logos">
                <a href="https://github.com/Upzaid"><img src={Github} /></a>
                <a href="https://twitter.com/Upzaid"><img src={Twitter}/></a>
            </div>
        </div>
    )
}