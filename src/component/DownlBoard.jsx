import React from 'react'

function DownlBoard() {
  return (
    <div className='wrapper py-[16px] px-[24px] bg-[rgba(255,255,255,.1)] backdrop-blur-[2px] shadow-[4px_4px_8px_2px_rgb(0_0_0_/.3)]'>
      <div className='flex gap-[27px] items-center'>
        <div className='logo relative cursor-pointer'>
          <img src='./src/assets/img/rectangle-logo.png'></img>
          <img loading='lazy' className='w-full h-full absolute top-0 left-0 brightness-200 shining z-20 animate-[wave_linear_2.5s_infinite_1s]' src='./src/assets/img/rectangle-logo.png'></img>
        </div>
        <div className='flex flex-col gap-[18px]'>
          <div className='appstore cursor-pointer'>
            <img src='./src/assets/img/Apple.png'></img>
          </div>
          <div className='chplay cursor-pointer'>
            <img src='./src/assets/img/googlePlay.png'></img>
          </div>
        </div>
        <div className='downl cursor-pointer'>
          <img src='./src/assets/img/pc.png'></img>
        </div>
      </div>
    </div>
  )
}

export default DownlBoard