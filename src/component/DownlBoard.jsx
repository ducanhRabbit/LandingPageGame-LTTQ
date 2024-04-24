import React from 'react'

function DownlBoard() {
  return (
    <div className='wrapper relative w-fit mx-auto'>
        <img loading='lazy' src='./src/assets/img/track.png'/>
        <div className='content absolute w-full h-full gap-2 top-0 right-0 px-8 py-5 grid grid-cols-4 grid-rows-2'>
            <div className='row-span-2 cursor-pointer'>
                <img loading='lazy' className='w-full h-full object-cover' src='./src/assets/img/Qr.png'></img>
            </div>
            <div className='cursor-pointer'><img loading='lazy' className='w-full h-full' src='./src/assets/img/Apple.png'></img></div>
            <div className='row-span-2 cursor-pointer'>
            <img loading='lazy' className='w-full h-full' src='./src/assets/img/apk.png'></img>
            </div>
            <div className='row-span-2 cursor-pointer'>
            <img loading='lazy' className='w-full h-full' src='./src/assets/img/icon app.png'></img>
            </div>
            <div className='cursor-pointer'><img loading='lazy' className='w-full h-full' src='./src/assets/img/googlePlay.png'></img></div>
        </div>
    </div>
  )
}

export default DownlBoard