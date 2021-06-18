import React from 'react'


export default function AboutMe(){
    return(
        <div className="container ">
            <div className="content">
                <h1 className="font-4">ABOUT</h1>
                <p>About me.</p><br />
                <p>Hi! My name is Zaid Lorea, here you can learn little bit about me.</p><br />
                <p>I am a Civil Engineer turned into a mostly self-taught Developer. I am passionate
                    about <a href="projects">building things</a> and always excited to learn new technologies.</p><br />
                <p>While I focus on the backend, I am not afraid to work on the front end of projects or any other
                    level of the stack to create the best products possible.
                </p> <br />
                <h2 className="font-2">THE STUFF I KNOW</h2><br />
                <ul>
                    <div>
                        <li>HTML & CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                    </div>
                    <div>
                        <li>NodeJS</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                    </div>
                </ul><br />
                <p>I have also dabbled with Python, Firebase and Bootstrap. Although there are always new things to learn,
                     picking up new frameworks, languages or technologies is not a problem.</p><br />
                <p>If you have an idea that you would like to see come to reality or collaborate feel free to <a href="/contact">reach out</a> so we can make things happen.
                </p>
            </div>
        </div>
    )
}