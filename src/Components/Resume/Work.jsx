import React from 'react'
import Job from './Job'

export default function Work(){

    const jobs = [
        {
            dates: "2019 - 2019",
            title: "Manager",
            company: "El Gremio: Trading Card Shop",
            tasks: ["", "Task 2", "Task 3"]
        },
        {
            dates: "2017 - 2019",
            title: "Titulo del Trabajo",
            company: "Autotransportes Pantaco",
            tasks: ["", "Task 2", "Task 3"]
        },
        {
            dates: "2017 - 2014",
            title: "Titulo del Trabajo",
            company: "Autotransportes Pantaco",
            tasks: ["", "Task 2", "Task 3"]
        },
    ]

    return(
        <div >
            <span className="font-3 bold title">Work</span>
            <table>
                <tbody>
                    {jobs.map(job =>{ 
                        return <Job job={job}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}