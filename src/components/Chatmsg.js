import React from 'react'
import User from "../assets/user-yout-removebg-preview.png"


const Chatmsg = ({name , text}) => {
  return (
    <div className='flex flex-row items-center'>
      <img className='h-7 w-7 bg-white border border-black rounded-3xl mr-2' alt='user' src={User} />
      <p className='font-bold px-1'>{name}</p>
      <p className='p-2'>{text}</p>
    </div>
  )
}

export default Chatmsg