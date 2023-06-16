import React from 'react'
import SearchBtn from "../assets/youtube-before-removebg-preview.png"
import VoiceSearch from "../assets/youtube-audio-removebg-preview.png"
import CreateSearch from "../assets/video-button.png"
import Nofi from "../assets/nofi-bell-removebg-preview.png"
import User from "../assets/user-yout-removebg-preview.png"
import { useDispatch } from 'react-redux'
import { toggleSideBar } from '../utils/sidebarSlice'

const Head = () => {
  const dispatch = useDispatch()
  const menuToggler = () => {
    dispatch(toggleSideBar())
  }
  return (
    <div className='flex justify-between shadow-md'>
    <div className='flex m-1 p-2 gap-5'>
      <img onClick={() => menuToggler()} className='h-8 w-8 bg-white cursor-pointer' alt='hum-icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png' />
      <a href='/'><img className='h-8 w-25' alt='youtube-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE54d8krphaVP1AQ1Jd4G1uRqLcA2N81TnA&usqp=CAU' /></a>
    </div>
    <div className='flex mt-3'>
      <input className='h-8 w-[500px] border bg-gray-100 border-gray-400 rounded-l-2xl' type='text' placeholder='  Search'/>
      <button className='h-8 w-12 bg-gray-400 rounded-r-2xl'><img alt='search-btn' className='w-7 h-7 ml-2' src={SearchBtn}/></button>
      <img className='h-6 w-6  mt-1 cursor-pointer bg-white ml-2 hover:bg-gray-400 rounded-3xl ' alt='voice-search' src={VoiceSearch} />
    </div>
    <div className='flex mt-3 gap-7'>
      <img className='h-8 w-9 bg-white  hover:bg-gray-400 rounded-3xl hover:w-9 hover:h-8' alt='create-video' src={CreateSearch} />
      <img className='h-8 w-8 bg-white  hover:bg-gray-400 rounded-3xl hover:w-8 hover:h-8' alt='voice-search' src={Nofi} />
      <img className='h-8 w-10 bg-white border border-black rounded-3xl mr-2  hover:bg-gray-400  hover:rounded-3xl hover:w-10 hover:h-8' alt='user' src={User} />
    </div>
    </div>
  )
}

export default Head