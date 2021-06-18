import React from 'react'
import Project from './Project'

export default function ProjectsPage(){

    const projects =[
        {
            title: "Game of Life React Edition",
            github: 'https://github.com/Upzaid/Life-React',
            description: `Jhon Conway's Game of Life built with React.`,
            live: '/gameoflife',
            technologies: ['Javascript', 'React']
        },
        {
            title: 'Elo Rating App',
            github: 'https://github.com/Upzaid/Elo-Leagues',
            description: `My first project, a desktop app for tracking the results of your favorite sports,
                        games, or e-sports leagues, and translate the results into Elo Rating.`,
            live: '',
            technologies: ['Python', 'TKinter', 'Matplotlib', 'SQLite']
        },
        {
            title: 'Desktop Database Client',
            github: 'https://github.com/Upzaid/AP-Database-Front-End',
            description: `I developed this project for a freelance client, it is a desktop app
                        that works as a client for a LAN database server, displays the requested
                        information from the database and allows to send requests for all the CRUD 
                        operations.`,
            live: '',
            technologies: ['Javascript', 'SCSS', 'React', 'Electron', 'PDFKit']
        },
        {
            title: 'Database Server',
            github: 'https://github.com/Upzaid/AP-Database-Server',
            description: `This is the server side of my Desktop Database Client, performs input validation,
                        user authentication, CRUD operations and verfies for user permissions. It is intended
                        to be a LAN server.`,
            live: '',
            technologies: ['Javascript', 'NodeJS', 'Express', 'MongoDB', "JWT"]
        },
        {
            title: 'Ranked Frontend',
            github: 'https://github.com/Upzaid/Ranked',
            description: `Ranked is a personal project, it's a platform for organizing and joining league competitions, while 
                        also showing user progression with the Elo Rating system.`,
            live: '',
            technologies: ['Javascript', 'React', 'Quill']
        },
        {
            title: 'Ranked Backend',
            github: 'https://github.com/Upzaid/Ranked-Front-End',
            description: `REST API for the Ranked platform, allows HTTP requests and performs CRUD operations.`,
            live: '',
            technologies: ['Javascript', 'NodeJS', 'Express', 'PostgreSQL', "JWT"]
        },
    ]

    return(
        <div className="container">
            <div className="content">
                <h1 className="font-4">PROJECTS</h1>
                {projects.map(project=>{
                    return (
                        <>
                            <Project project={project}/>
                            <br />
                            <hr />
                            <br />
                        </>
                    )
                })}
            </div>
        </div>
    )
}