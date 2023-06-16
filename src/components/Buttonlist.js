import React from 'react'

const Buttonlist = ({side}) => {
  return (
    <div className='flex flex-row gap-1'>
    {side.map((side , index) => <div key={index} className="border border-black rounded-md p-1 text-center hover:bg-gray-200 ">{side}</div>)}
    <div className="mt-1 cursor-pointer" onClick={null}>➤</div>
    </div>
  )
}

export default Buttonlist