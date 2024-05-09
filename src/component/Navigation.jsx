import React, { useEffect, useState } from 'react'

function Navigation({observerRefs, outterRef}) {
    const [bannerRef,registrationRef,selectionRef,sliderStoryRef] = observerRefs
    const [sectionIdOnScreen,setSectionIdOnScreen] = useState('Banner')
    console.log(sectionIdOnScreen)

    const handleSpyScroll = ()=>{
        observerRefs.forEach((sec)=>{
            let top = outterRef.current.scrollTop
            let offSet = sec.current.offsetTop -150
            let height = sec.current.offsetHeight
            let id = sec.current.id
            if(top >= offSet && top < offSet + height){
                setSectionIdOnScreen(id)
            }
        })
    }
    useEffect(()=>{
        console.log(outterRef?.current)
        outterRef?.current?.addEventListener('scroll',handleSpyScroll)
        return ()=> {outterRef?.current?.removeEventListener('scroll',handleSpyScroll)}
    },[])
    return (
        <div className='navigation absolute h-[calc(100%_-_620px)] pb-[505px] top-[320px] left-[90px] md:block hidden'>
            <div className='sticky flex flex-col gap-[20px] top-[320px] z-50'>

                <div className='w-[318px]  left-[21px] absolute -z-10 border-dotted border-[#cacdcd] opacity-90 border-t-4 origin-left rotate-90 -top-[18px]'></div>
                <a href='#Banner' className=' block cursor-pointer'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[42px]'>
                            {sectionIdOnScreen === 'Banner'?<img className='w-full h-full object-cover' src='./src/assets/img/navigate-active.png' />:<img className='w-full h-full object-cover' src='./src/assets/img/navigate-unactive.png' />}
                        </div>
                        <div className={`${sectionIdOnScreen === 'Banner'?'stroke-text-active':'stroke-text'} text-2xl font-semibold`}>Trang Chủ</div>
                    </div>
                </a>
                <a href='#Registration' className='cursor-pointer'>
                    <div className='flex items-center  gap-4'>
                        <div className='w-[42px]'>
                        {sectionIdOnScreen === 'Registration'?<img className='w-full h-full object-cover' src='./src/assets/img/navigate-active.png' />:<img className='w-full h-full object-cover' src='./src/assets/img/navigate-unactive.png' />}
                        </div>
                        <span className={`${sectionIdOnScreen === 'Registration'?'stroke-text-active':'stroke-text'} text-2xl font-semibold`}>Đăng Ký Trước <br></br> Nhận Quà</span>
                    </div>
                </a>
                <a href='#Selection' className='cursor-pointer'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[42px]'>
                        {sectionIdOnScreen === 'Selection'?<img className='w-full h-full object-cover' src='./src/assets/img/navigate-active.png' />:<img className='w-full h-full object-cover' src='./src/assets/img/navigate-unactive.png' />}
                        </div>
                        <span className={`${sectionIdOnScreen === 'Selection'?'stroke-text-active':'stroke-text'} text-2xl font-semibold`}>Lục Phái <br></br>Danh Tướng</span>
                    </div>
                </a>
                <a href='#SliderStory' className='cursor-pointer'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[42px]'>
                        {sectionIdOnScreen === 'SliderStory'?<img className='w-full h-full object-cover' src='./src/assets/img/navigate-active.png' />:<img className='w-full h-full object-cover' src='./src/assets/img/navigate-unactive.png' />}
                        </div>
                        <span className={`${sectionIdOnScreen === 'SliderStory'?'stroke-text-active':'stroke-text'} text-2xl font-semibold`}>Lục Phái <br></br>Đặc Sắc</span>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default Navigation