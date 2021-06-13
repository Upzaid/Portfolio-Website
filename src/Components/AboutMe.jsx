import React from 'react'
import Avatar from '../Assets/Avatar1.png'

export default function AboutMe(){
    return(
        <div className="content">
            <span className='font-3 bold title'>About Me</span>
            <div className='about'>
                <img src={Avatar} className="avatar" alt=""/>
                <div className='title-card'>
                    <span className="font-2 bold">Hi, I'm Zaid!</span>
                    <span className="bold">I am Civil Engineer turned into Developer, based in Houston, Tx.</span>
                    <span className="bold">I work mainly with Javascript and I have dabbled in Python but picking up a new framework
                        or language is not a problem. While I focus on the backend of
                        projects, I am also comfortable working on the frontend.
                    </span>
                    <span className="bold">If you are a buisness seeking a web presence or an employer looking to
                        hire, feel free to get in touch with me.
                    </span>
                </div>
            </div>
        </div>
    )
}