import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

export class StationsLayout extends Component {
  render() {
    return (
      <div className='border-2 border-red-700 w-full p-5'>
        <h1 className='text-lg font-bold'> Stations Locations</h1>
        <Outlet/>
      </div>
    )
  }
}

export default StationsLayout