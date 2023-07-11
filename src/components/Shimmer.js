import React from "react"

const Shimmer = () => {
    return (
      <div className='flex flex-wrap gap-1'>
        {Array(50).fill('').map((e , index) => <div className="p-2 m-1 w-72 h-[350px] shadow-xl rounded-2xl bg-gray-200" key={index}></div>)}
      </div>
    )
  }
  
  export default Shimmer