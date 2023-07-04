import React from 'react'
import Buttonlist from './Buttonlist'
import Videocontainer from './Videocontainer'

const list =["All","New to you","Music","Podcasts","News","Gaming","Mixes","AI","Scene","Comedy","Live","Computer Science","Apple","Cricket","Cars","Fashion","Recently Uploaded","Watched","Playlist","List","React","Clone","last"]

const MainContianer = () => {
  return (
    <div className='flex flex-col gap-[7px]'>
      <div>
      < Buttonlist side={list} />
      </div>
      < Videocontainer />
    </div>
  )
}

export default MainContianer