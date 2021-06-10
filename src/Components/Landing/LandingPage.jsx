import React from 'react'
import TitleCard from './TitleCard'
import AvatarFrame from './AvatarFrame'

export default function LandingPage (){
    return(
        <div className="content">
            <AvatarFrame/>
            <TitleCard />
        </div>
    )
}