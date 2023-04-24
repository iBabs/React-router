import React from 'react'
import { useParams } from 'react-router-dom'

export default function StaionsDetails() {
    const{id} = useParams()
  return (
    <div>
        <h2 className='text-xl font-bold'>{id}</h2>
    </div>
  )
}
