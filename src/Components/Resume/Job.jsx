import React from 'react'

export default function Job(props){
    return(
        <tr className="font-1 bold">
            <td>{props.job.dates}</td>
            <td>{props.job.company}</td>
            <td>{props.job.title}</td>
            <td>{props.job.tasks.map(task =>{
                return(
                    <li>{task}</li>
                )
            })}</td>
        </tr>
    )
}