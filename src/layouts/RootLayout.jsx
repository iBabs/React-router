import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
   <div className='rootlayout'>
    <header className=" flex justify-between px-2  items-center bg-slate-600">
      <h1 className="text-2xl text-yellow-50">Personalty</h1>
      <nav className="flex  pt-5 text-white font-bold">
        <NavLink className="px-7 py-2" to="/">
          Home
        </NavLink>
        <NavLink className="px-7 py-2" to="about">
          About
        </NavLink>
        <NavLink className="px-7 py-2" to="help">
          Help
        </NavLink>
      </nav>
    </header>
    <main  className="min-h-screen bg-slate-200 flex justify-center pt-10 px-10">
        <Outlet/>
    </main>
   </div>
  )
}

export default RootLayout