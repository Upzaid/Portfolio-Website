import React from 'react'
import Education from './Education'
import Work from './Work'

export default function ResumePage(){

    return(
        <div className="content resume">
            <Work />
            <Education />
        </div>
    )
}