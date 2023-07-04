import React, { useEffect, useState } from 'react'
import Chatmsg from './Chatmsg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatslice'
import {generateName, makeid} from "../components/Helper"

const Livechat = () => {

  const [LiveForm , setLiveForm] = useState()
 
  const dispatch = useDispatch()

  const liveMessage = useSelector((store) =>  store.chat.message)
 
  useEffect(() => {
    const i = setInterval(() => {
       
   dispatch(
      addMessage({
        name : generateName() , 
        text : makeid(20) + "👋",
      })
      )
    } , 1000)
    
    return () => clearInterval(i)
  } , [])

  return (
    <div className="bg-gray-200 w-[430px] h-[680px] shadow-sm rounded-md">
           <div className='m-2 p-2 border border-black rounded-md flex flex-row justify-between'><span className='hover:text-gray-500'>Live chat <span> ▽ </span></span><span className=' hover:bg-gray-400 w-6 text-center h-6 rounded-2xl cursor-pointer'> ⁝ </span>
           </div>
           <div className="m-2 h-[550px] w-[415px] border border-black overflow-y-scroll rounded-md flex flex-col-reverse ">
              <div className='m-2 px-1 py-1'>
                 {liveMessage.map((c) => <Chatmsg name={c.name}  text={c.text} />)}
              </div>
           </div>
           <form onClick={(e) => {e.preventDefault()
             dispatch(addMessage({
              name : "Asfaq",
              text : LiveForm
             }))
             setLiveForm("")
             }}>
            <input className=' m-3 px-2 w-[320px] h-7 border border-gray-600' type='text' onChange={(e) => setLiveForm(e.target.value)} value={LiveForm}></input>
            <button className='p-1 bg-green-300'>Submit</button>
           </form>
       
    </div>
  )
}

export default Livechat