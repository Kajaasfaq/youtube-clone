import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from './Helper'
import Videomenu from './Videomenu'
import { Link } from 'react-router-dom'
import { openSideBar } from '../utils/sidebarSlice'
import { useDispatch } from 'react-redux'

const Videocontainer = () => {
    const [videos , setVideos] = useState([])

    useEffect(() => {
        getVideo()
    }, [])
    const getVideo = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        setVideos(json.items)
    }
    const dispatch = useDispatch()
  const menuOpen = () => {
    dispatch(openSideBar())
  }
  useEffect(() => {
    menuOpen()
  } )
  return (
    <>
    <div className='flex flex-wrap gap-1'>
    {videos.map((video) => 
    <Link to={"/watch?v=" + video.id}> <Videomenu key={video.id} info={video}/> </Link> )}
    </div>
    </>
  )
}


export default Videocontainer