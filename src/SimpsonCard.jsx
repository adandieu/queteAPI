import React from 'react'

export default function SimpsonCard({simpson}) {
    return (
        <div>
            <li> {simpson.character} </li>
            <li> {simpson.characterDirection} </li>
            <img src= {simpson.image}/>
            <li> {simpson.quote} </li>

        </div>
      );
    }
