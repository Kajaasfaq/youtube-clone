import React, { useEffect, useState } from 'react'
import SearchBtn from "../assets/youtube-before-removebg-preview.png"
import VoiceSearch from "../assets/youtube-audio-removebg-preview.png"
import CreateSearch from "../assets/video-button.png"
import Nofi from "../assets/nofi-bell-removebg-preview.png"
import User from "../assets/user-yout-removebg-preview.png"
import { useDispatch, useSelector } from 'react-redux'
import { toggleSideBar } from '../utils/sidebarSlice'
import { YOUTUBE_SUGGESTION_API } from './Helper'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {

  const[searchQuery , SetsearchQuery ] = useState("")
  const[suggestion , Setsuggestion] = useState([])
  const[showsuggestion , Setshowsuggestion] = useState(false)

 const searchResult = useSelector((store) => store.search)

  const dispatch = useDispatch()

  const menuToggler = () => {
    dispatch(toggleSideBar())
  }


 useEffect(() => {
   const timer =  setTimeout(() => {

    if(searchResult[searchQuery] ){
      Setsuggestion(searchResult[searchQuery])
     } else {
      getSearchSuggestion();
     }
   } , 200)
  
   return () => {
    clearTimeout(timer)
   };
 } , [searchQuery])


const getSearchSuggestion = async () => {
  
  const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
  const json = await data.json();
  Setsuggestion(json[1]);

  dispatch(
    cacheResults({
      [searchQuery] : json[1],
    })
  );
};

  return (
    <>
    <div className='flex justify-between shadow-md'>
    <div className='flex m-1 p-2 gap-5'>
      <img onClick={() => menuToggler()} className='h-8 w-8 bg-white cursor-pointer' alt='hum-icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png' />
      <a href='/'><img className='h-8 w-25' alt='youtube-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE54d8krphaVP1AQ1Jd4G1uRqLcA2N81TnA&usqp=CAU' /></a>
    </div>
    <div className='flex mt-3'>
      <div className='flex '>
      <input className='h-8 p-3 w-[500px] border bg-gray-100 border-gray-400 rounded-l-2xl' type='text' placeholder='  Search' value={searchQuery}
       onChange={(e) => SetsearchQuery(e.target.value)}
       onFocus={() => Setshowsuggestion(true)}
       onBlur={() => Setshowsuggestion(false)}/>
      <button className='h-8 w-12 bg-gray-400 rounded-r-2xl'><img alt='search-btn' className='w-7 h-7 ml-2' src={SearchBtn}/></button>
      </div>
      {showsuggestion && <div className=" fixed top-12 w-[31rem] px-3 bg-white shadow-md rounded-md border border-gray-100 ">
        <ul> 
          {suggestion.map((s) => <li key={s} className='py-2 hover:bg-gray-200 shadow-sm flex items-center gap-2'><img className='w-4 h-4' alt={"search"} src={SearchBtn}/>{s}</li>)}
        </ul>
      </div>}
      <img className='h-6 w-6  mt-1 cursor-pointer bg-white ml-2 hover:bg-gray-400 rounded-3xl ' alt='voice-search' src={VoiceSearch} />
    </div>
    <div className='flex mr-3 mt-3 gap-7'>
      <img className='h-7 w-7 bg-white  hover:bg-gray-400 rounded-3xl' alt='create-video' src={CreateSearch} />
      <img className='h-7 w-7 bg-white  hover:bg-gray-400 rounded-3xl' alt='voice-search' src={Nofi} />
      <img className='h-7 w-7 bg-white border border-black rounded-3xl mr-2  hover:bg-gray-400  hover:rounded-3xl' alt='user' src={User} />
    </div>
    </div>
    </>
  )
}

export default Head