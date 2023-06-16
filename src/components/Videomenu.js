import React from 'react'

const Videomenu = ({info}) => {
    const {snippet , statistics} = info;
    const {channelTitle , title ,thumbnails} = snippet;
  return (
    <div className=' p-2 m-1 w-72 h-[350px] shadow-xl rounded-xl cursor-pointer '>
        < img className="rounded-md" alt='thumbnail' src={thumbnails.high.url} />
        < ul className='p-1'>
        <li className="font-bold text-sm">{title}</li>
        <li className="text-sm">{channelTitle}</li>
        <li className="text-xs">{statistics.viewCount}views</li>
        </ul>
    </div>
  )
}

export default Videomenu