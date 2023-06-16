import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [Showmore , setShowmore] = useState(false)
  const [showType , setType] = useState(true)
  
  const openMore = () => {
    setShowmore(!Showmore)
    setType(!showType)
  }

  const closeMore = () => {
    setShowmore(false)
    setType(true)
  }
  const toggleSide = useSelector( store => store.sidebar.isMenuOpen)

  if(!toggleSide) return(<div className=' m-2 bg-white flex flex-col gap-10'>
    <div className='flex flex-col gap-2 m-1 items-center'>
    <Link to="/"><img className="h-10 w-10" src="https://img.icons8.com/material-rounded/96/home.png" alt="home" />
    <h1 className="text-sm cursor-pointer">Home</h1></Link>
    </div>
    <div className='flex flex-col gap-2 m-1 items-center'>
    <img className="h-10 w-10" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/external-youtube-applications-windows-those-icons-fill-those-icons.png" alt="external-youtube-applications-windows-those-icons-fill-those-icons"/>
    <h1  className="text-sm">Shorts</h1>
    </div>
    <div className='flex flex-col gap-2 m-1 items-center'>
    <img className="h-10 w-10"src="https://img.icons8.com/ios-filled/50/video-playlist.png" alt="video-playlist"/>
    <h1  className="text-sm">Subscriptions</h1>
    </div>
  </div>)

  return (
    <div className='w-[10%] h-[100%] mx-3 px-3' >
      <div>
      <div className=" font-semibold text-justify flex flex-col gap-2">
      <Link to="/"><h3 className="hover:bg-gray-200 cursor-pointer ">Home</h3></Link>
        <h3 className="hover:bg-gray-200 ">Shorts</h3>
        <h3 className="hover:bg-gray-200 ">Subscriptions</h3>
        <div className="w-[175px] h-[1.5px] bg-black items-center"></div>
      </div>
      <div className='font-semibold text-justify flex flex-col gap-2'>
        <h3 className="hover:bg-gray-200">Library</h3>
        <h3 className="hover:bg-gray-200">History</h3>
        <h3 className="hover:bg-gray-200">Your videos</h3>
        <h3 className="hover:bg-gray-200">Your courses</h3>
        <h3 className="hover:bg-gray-200">Watch later</h3>
        <div className="w-[175px] h-[0.5px] bg-black items-center mb-1"></div>
      </div>
      <div>
        <h3 className='font-semibold text-justify'>Explore</h3>
        <ul className="mx-3 flex flex-col gap-1">
          <li className="hover:bg-gray-200">Trending</li>
          <li className="hover:bg-gray-200">Shopping</li>
          <li className="hover:bg-gray-200">Music</li>
          <li className="hover:bg-gray-200">Movies</li>
          <li className="hover:bg-gray-200">Live</li>
          <li className="hover:bg-gray-200 cursor-pointer" onClick={openMore}>{showType ? ("Show More") : <div className="hidden"></div> }</li>
          { Showmore ?
          (<ul className='className="mx-3 flex flex-col gap-[4px]'>
          <li className="hover:bg-gray-200">Gaming</li>
          <li className="hover:bg-gray-200">News</li>
          <li className="hover:bg-gray-200">Sports</li>
          <li className="hover:bg-gray-200">Learning</li>
          <li className="hover:bg-gray-200">Fashion & Beauty</li> 
          <li className="hover:bg-gray-200 cursor-pointer" onClick={closeMore}>Show Less</li> 
          </ul>) : <div className="hidden"></div> }
        </ul>
        <div className="w-[175px] h-[0.5px] bg-black items-center mt-1 mb-1"></div>
      </div><div>
        <h3 className='font-semibold text-justify'>More from YouTubes</h3>
        <ul className="mx-3 flex flex-col gap-1">
          <li className="hover:bg-gray-200">YouTube Premium</li>
          <li className="hover:bg-gray-200">YouTube Studio</li>
          <li className="hover:bg-gray-200">YouTube Music</li>
          <li className="hover:bg-gray-200">YouTube Kid</li>
        </ul>
        <div className="w-[175px] h-[0.5px] mt-1 mb-1 bg-black items-center"></div>
      </div>
      <div className=" font-semibold text-justify flex flex-col gap-2" >
        <h3 className='hover:bg-gray-200'>Settings</h3>
        <h3 className='hover:bg-gray-200'>Report history</h3>
        <h3 className='hover:bg-gray-200'>Help</h3>
        <h3 className='hover:bg-gray-200'>Send feedback</h3>
      </div>
      <div className="w-[175px] h-[0.5px] bg-black items-center mt-1 mb-1 "></div>
    </div>
    <div>© 2023 Google LLC</div>
    </div>
  )
}

export default Sidebar