import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from './Helper'
import Videomenu from './Videomenu'
import { Link } from 'react-router-dom'
import { openSideBar } from '../utils/sidebarSlice'
import { useDispatch } from 'react-redux'

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);

  
  const menuOpen = () => {
    dispatch(openSideBar());
  };

  useEffect(() => {
    menuOpen();
  }, []);
   
 
  const getVideos = async (page) => {
    const data = await fetch(`${YOUTUBE_VIDEO_API}&page=${page}`);
    const json = await data.json();
    setVideos((prevVideos) => [...prevVideos, ...json.items]);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setPage((prevPage) => prevPage + 1);
    }
  };
 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    getVideos(page);
  }, [page]);
  

  const dispatch = useDispatch();

  return (
    <>
      <div className='flex flex-wrap gap-1'>
        {videos.map((video) => (
          <Link to={'/watch?v=' + video.id} key={video.id}>
            <Videomenu info={video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Videocontainer;
