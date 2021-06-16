import React from 'react'

export default function Project(props){
    
    const {project} = props

    return(
        <div className="project">
            <h2>{project.title}</h2>
            <p>
                <a target="_blank" rel="noreferrer" href={project.github}>Github</a> {project.live ? <a target="_blank" rel="noreferrer" href={project.live}>Live</a> : null}
            </p>
            <br />
            <p>{project.description}</p>
            <br />
            {project.technologies.map(technology =>{
                return <span key={technology} className='technology '>{technology} | </span>
            })}
        </div>
    )
}