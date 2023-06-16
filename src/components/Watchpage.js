import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/sidebarSlice'
import { useSearchParams } from 'react-router-dom'
import { YOUR_API_KEY } from './Helper'
import User from "../assets/user-yout-removebg-preview.png"


const Watchpage = () => {
  
  const [ description , setDescription] = useState()
  const [SearchParams] = useSearchParams()

  const dispatch = useDispatch()
  const closeSide = () => {
    dispatch(closeSideBar())
  }
  useEffect(() => {
    closeSide() 
    
  } )

  useEffect(() => {
    video()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [])

 
  
  const video = async() => {
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+ SearchParams.get("v") +"&key=" + YOUR_API_KEY )
    const response = await data.json()
    setDescription(response.items[0])
  }
  
   
   console.log(description)
  return (
    <>
      <div className='flex flex-col gap-5 w-[100%] h-[100%]'>
      <iframe width="1100" height="600" src={"https://www.youtube.com/embed/"+ SearchParams.get("v") + "?autoplay=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <div>
        <h1 className="font-bold m-2 text-lg">{description?.snippet?.title}</h1>
      </div>
      <div className='flex flex-row gap-3 m-2 items-center'>
        <img className='h-9 w-10 bg-white border border-black rounded-3xl ' src={User} alt='channelIcon'/>
        <h1 className="font-bold">{description?.snippet?.channelTitle}</h1>
        <button className=" ml-10 rounded-xl  w-28 h-8 bg-gray-200">Subscribed</button>
        <div>
        <button className=" ml-80 rounded-l-xl h-8 w-24 bg-gray-200">👍{description?.statistics?.likeCount}</button>
        <button className=" rounded-r-xl  w-12 h-8 bg-gray-200"> <span> | </span>👎</button>
        </div>  
      </div>
      <div className='w-[1100px] h-[100%] bg-gray-100 flex flex-col gap-3'>
          <h1 className="m-5 font-bold">{description?.statistics?.viewCount} views</h1>
          <div>
            <h1 className='m-5'>Description:</h1>
           <h1 className='m-5 text-sm'>{description?.snippet?.description}</h1>
          </div>
          <div>
            <h1 className='m-5'>Tags:</h1>
          <h1 className='m-5 text-sm'>{description?.snippet?.tags}</h1>
          </div>
       </div>
       <div className=''>
         <h1 className='m-5 font-bold'>{description?.statistics?.commentCount} comments</h1>

       </div>
    </div>
    </>
    
  )
}

export default Watchpage