import React from 'react'
import DownlBoard from '../DownlBoard'

function Banner() {
    return (
        <div className='relative'>
            <img className='absolute w-full  object-cover -z-10' src='./src/assets/img/Layer-959.png' />
            <section className=' relative overflow-hidden'>
                <div className='w-[65%] mx-auto relative'>
                    <img className='w-full ml-4' src='./src/assets/img/main_char.png' />
                    <div className='absolute top-0 left-0'>
                        <img src="./src/assets/img/logo.png" alt="" />
                    </div>
                </div>
                <div className='flex flex-col items-center absolute bottom-1/2 translate-y-[calc(50%_+_4rem)] w-full'>
                    <div className=' play-btn w-[160px] z-20'>
                        <img src='./src/assets/img/play_btn.png' />
                    </div>
                    <div className='logan -my-[14rem] min-h-0 ml-20'>
                        <img className='w-full' src='./src/assets/img/tittle.png' />
                    </div>
                </div>
                <div className='absolute bottom-10 w-full'>
                    <DownlBoard />
                </div>
            </section>
            <section className='2'>
                <div className='title'>
                    <img className='mx-auto' src='./src/assets/img/title-pg2.png'/>
                </div>
            </section>
        </div>
    )
}

export default Banner