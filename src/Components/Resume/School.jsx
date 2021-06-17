import React from 'react'

export default function School(props){
    console.log(props);
    return(
       <tr className="font-1 bold">
           <td >{props.data.dates}</td>
           <td >{props.data.name}</td>
           <td >{props.data.degree}</td>
       </tr>
    )
}