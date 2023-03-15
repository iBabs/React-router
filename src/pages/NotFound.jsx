import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/404 Error Page not Found with people connecting a plug-rafiki.png'

function NotFound() {
  return (
    <div> 
    
    <img src={image} className='h-96'/>
    <p className='font-bold text-center'> Go back to <Link to='/'>HOME</Link></p>
    </div>
  )
}

export default NotFound