import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

export default function StaionsDetails() {
    const{id} = useParams()
    const station = useLoaderData()
    const navigate = useNavigate()
  return (
    <>
    <button onClick={()=>navigate(-1)} className='hover:underline hover:text-red-700 transition-all ease-in-out duration-500'>Go back</button>
    <div className='space-y-10 flex flex-col justify-center items-center h-screen'>
        <h2 className='text-xl font-bold'> Details for {station.name}</h2>
        <p>The {station.name} is located at {station.location}</p>
        <p>The station has total capacity of {station.capacity} and the starting ticket price is {station.fee}</p>

        <p>The staion code is {station.code}, you can locate the station with the code on Google Map</p>
    </div></>
  )
}


export const stationDeatailsLoader = async({params}) =>{
    const {id} = params

    const res = await fetch(`http://localhost:4000/stations/${id}`)

    if(!res.ok){
        throw Error("Staion doesn't exist")
    }

    return res.json()
}