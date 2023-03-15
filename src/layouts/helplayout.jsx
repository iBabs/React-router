import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Helplayout() {
  return (
    <div className=' space-y-5 w-10/12'>
        <h1 className='text-3xl font-extrabold'>
            Help Section
        </h1>
        <p>
        Lorem Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. 
        </p>
        <nav className=' bg-slate-500 flex'>
          <NavLink to ="FAQ" className='p-5 bg-slate-500 hover:bg-slate-300'> FAQ</NavLink>
          <NavLink to ="contacts" className='p-5 bg-slate-500 hover:bg-slate-300'>Contacts</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}
