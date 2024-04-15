import React from 'react'
import "./Test.css"
function Test() {
  return (
    <div className='container1 '>
      <div className='page_1 relative'>
        <div className='cover w-[350px] md:w-[70%] relative -translate-x-1/2 left-1/2 flex justify-center items-center'>
          <img className='pic w-full' src='./src/assets/img/main_char.png' />
          <img className='absolute h-auto w-[70px] xs:w-[100px] md:w-[130px] lg:w-[200px] xl:w-[288px] max-w-[288px] max-h-[182px] md:-translate-x-1/3 left-0  top-0' src='./src/assets/img/logo.png' />
          <div className='absolute translate-y-8 bottom-1/2 play-btn max-w-[200px] z-20'>
            <img src='./src/assets/img/play_btn.png' />
          </div>
          <div className='logan absolute bottom-1/2 translate-y-[65%] translate-x-8  '>
            <img className='' src='./src/assets/img/tittle.png' />
          </div>
        </div>
        <div className='navigation inline-grid gap-2 grid-cols-1 text-black'>
          <div>
            <span className='p-2'>Trang chủ</span>
          </div>
          <div>
            2
          </div>
          <div>
            3
          </div>
        </div>
      </div>
      <div className='page_2'>
        Page 2
      </div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default Test