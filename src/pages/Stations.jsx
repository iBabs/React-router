import React from 'react'

export default function Stations() {
  return (
    <div>

    </div>
  )
}

//loader function

export const stationsLoader = async () =>{
    const res = await fetch (
        'http://localhost:4000/stations'
    )

    return res.json()
}