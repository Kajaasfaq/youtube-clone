import React from 'react'

const Comment = ({cmt}) => {
 const cmts = cmt?.snippet?.topLevelComment?.snippet;
  return (
    <>
                      <div className='flex flex-row gap-3 m-5 items-center'>
                      <img className='w-10 h-10 border border-black rounded-2xl' alt='cmt' src={cmts?.authorProfileImageUrl} />
                      <h1 className="font-bold text-xs">{cmts?.authorDisplayName}</h1>
                      <div className='flex flex-row gap-1'>
                         <h1 className="text-xs">{cmts?.textDisplay}</h1>
                         <button className='bg-gray-300 rounded-lg w-24'>👍{cmts?.likeCount}</button>
                      </div>
                      </div>
    </>
  )
}

export default Comment