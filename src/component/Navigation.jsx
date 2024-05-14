import React, { useEffect, useState } from 'react'

function Navigation({bannerInView, registrationInView,selectionInView,sliderStoryInView}) {
    return (
        <div className='navigation absolute h-[calc(100%_-_620px)] pb-[505px] top-[320px] left-[90px] md:block hidden'>
            <div className='sticky flex flex-col gap-[20px] top-[320px] z-50'>

                <div className='w-[318px]  left-[21px] absolute -z-10 border-dotted border-[#cacdcd] opacity-90 border-t-4 origin-left rotate-90 -top-[18px]'></div>
                <a href='#Banner' className=' block cursor-pointer'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[42px]'>
                            {bannerInView?<img className='w-full h-full object-cover' src='./src/assets/img/navigate-active.png' />:<img className='w-full h-full object-cover' src='./src/assets/img/navigate-unactive.png' />}
                        </div>
                        <div className={`${bannerInView?'stroke-text-active':'stroke-text'} text-2xl font-semibold`}>Trang Chủ</div>
                    </div>
                </a>
                <a href='#Registration' className='cursor-pointer'>
                    <div className='flex items-center  gap-4'>
                        <div className='w-[42px]'>
                        {registrationInView?<img className='w-full h-full object-cover' src='./src/assets/img/navigate-active.png' />:<img className='w-full h-full object-cover' src='./src/assets/img/navigate-unactive.png' />}
                        </div>
                        <span className={`${registrationInView?'stroke-text-active':'stroke-text'} text-2xl font-semibold`}>Đăng Ký Trước <br></br> Nhận Quà</span>
                    </div>
                </a>
                <a href='#Selection' className='cursor-pointer'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[42px]'>
                        {selectionInView?<img className='w-full h-full object-cover' src='./src/assets/img/navigate-active.png' />:<img className='w-full h-full object-cover' src='./src/assets/img/navigate-unactive.png' />}
                        </div>
                        <span className={`${selectionInView?'stroke-text-active':'stroke-text'} text-2xl font-semibold`}>Lục Phái <br></br>Danh Tướng</span>
                    </div>
                </a>
                <a href='#SliderStory' className='cursor-pointer'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[42px]'>
                        {sliderStoryInView?<img className='w-full h-full object-cover' src='./src/assets/img/navigate-active.png' />:<img className='w-full h-full object-cover' src='./src/assets/img/navigate-unactive.png' />}
                        </div>
                        <span className={`${sliderStoryInView?'stroke-text-active':'stroke-text'} text-2xl font-semibold`}>Lục Phái <br></br>Đặc Sắc</span>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default Navigation

// className='navigation absolute h-[calc(100%_-_620px)] pb-[505px] top-[320px] left-[90px] md:block hidden'