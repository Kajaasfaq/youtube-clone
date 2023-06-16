import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
       <div className='flex flex-row gap-5 mt-4 '>
       <Sidebar/>
       < Outlet />
       </div>
  )
}

export default Body