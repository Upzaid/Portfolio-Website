import React from 'react'
import School from './School'

export default function Education(){
    
    const schools =[
        {
            name: 'The Odin Project',
            dates: "2021 - 2020",
            degree: 'Full Stack Javascript Developer',
        },
        {
            name: 'Faculty of Engineering U.N.A.M.',
            dates: "2017 - 2017",
            degree: 'Specialization Tranportation',
        },
        {
            name: 'Faculty of Engineering U.N.A.M.',
            dates: "2012 - 2008",
            degree: 'B.S. Civil Engineering',
        },
    ]
    return(
        <div >
            <span className="font-3 bold title">Education</span>
            <table>
                <tbody>
                    {schools.map(school =>{ 
                        return <School data={school} />
                    })}
                </tbody>
            </table>
        </div>
    )
}