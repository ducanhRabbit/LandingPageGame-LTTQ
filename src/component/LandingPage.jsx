import React, { useRef, useState } from 'react'
import DownlBoard from './DownlBoard'
import RegistrationRewards from './RegistrationRewards'
import Selection from './Selection'
import useScreenSize from '../hook/useScreenSize'
import Slider from 'react-slick'
import SliderStory from './SliderStory'
import Navigation from './Navigation'

function LandingPage() {
    const { screenWidth, screenHeight } = useScreenSize()
    const ratio = screenWidth / 1920
    const bannerRef = useRef(null)
    const registrationRef = useRef(null)
    const selectionRef = useRef(null)
    const sliderStoryRef = useRef(null)
    const outterRef = useRef(null)
    return (
        <>
            <div ref={outterRef} className='outter mx-auto scroll-smooth relative w-full h-screen overflow-x-hidden'>
                <div style={{
                    transform: `scale(${ratio})`,
                }} className={`absolute w-[1930px] origin-top-left`}>
                    <Navigation outterRef={outterRef} observerRefs={[bannerRef,registrationRef,selectionRef,sliderStoryRef]}/>
                    <img loading='lazy' className='absolute w-full  object-cover -z-10' src='./src/assets/img/main-bg.png' />
                    <section ref={bannerRef} id='Banner' className='1 relative overflow-hidden'>

                        <div className='w-[65%] mx-auto relative'>
                            <img loading='lazy' className='w-full ml-4' src='./src/assets/img/main_char.png' />
                            <div className='absolute top-0 left-0 cursor-pointer'>
                                <img loading='lazy' src="./src/assets/img/logo.png" alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col items-center absolute bottom-1/2 translate-y-[calc(50%_+_4rem)] w-full'>
                            <div className='cursor-pointer play-btn w-[160px] z-20'>
                                <img loading='lazy' src='./src/assets/img/play_btn.png' />
                            </div>
                            <div className='logan -my-[14rem] min-h-0 ml-20'>
                                <img loading='lazy' className='w-full' src='./src/assets/img/tittle.png' />
                            </div>
                        </div>
                        <div className='absolute bottom-10 w-full'>
                            <DownlBoard />
                        </div>
                    </section>
                    <section ref={registrationRef} id='Registration' className='2 relative h-[958px]'>
                        <img loading='lazy' className='absolute -top-10 object-cover' src='./src/assets/img/la cay.png' />
                        <div className='title'>
                            <img loading='lazy' className='mx-auto' src='./src/assets/img/title-pg2.png' />
                        </div>
                        <RegistrationRewards />
                    </section>
                    <section ref={selectionRef} id='Selection' className='3  '>
                        <Selection />

                    </section>
                    <section ref={sliderStoryRef} id='SliderStory' className='4 relative border-none'>
                        <div className='background'>
                            <img loading='lazy' className='w-full object-cover' src='./src/assets/img/BG-pg4.png' />
                        </div>
                        <div className='content absolute top-0 w-full'>
                            <div className='w-[900px] h-[500px] mt-[320px] relative mx-auto'>
                                <SliderStory />
                            </div>
                        </div>
                    </section>

                    <section className='footer'>
                        <div className='navigation-footer flex justify-center bg-[#8a1919]'>
                            <div className='px-8 py-4 cursor-pointer'>
                                Trang chủ
                            </div>
                            <div className='px-8 py-4 cursor-pointer'>
                                Fanpage
                            </div>
                            <div className='px-8 py-4 cursor-pointer'>
                                Sự kiện
                            </div>
                            <div className='px-8 py-4 cursor-pointer'>
                                Cộng đồng
                            </div>
                            <div className='px-8 py-4 cursor-pointer'>
                                Hỗ trợ
                            </div>

                        </div>
                        <div className='py-20 bg-white'>
                            <div className='container-footer w-[1200px] mx-auto'>
                                <img loading='lazy' className='mx-auto mb-5' src='./src/assets/img/Vplay-logo.png' />
                                <p className='text-black text-center'>
                                    Hotline: <b>098x888x88</b> - Email: <b>hotro@vplay.vn</b> - Chơi quá 180 phút một ngày sẽ ảnh hưởng xấu đến sức khỏe <br />
                                    Công ty CP Vplay phân phối độc quyền tại Việt Nam. Địa chỉ: Tầng 7, tòa nhà VTVCab, Số 3, Ngõ 84 Ngọc Khánh, Phường Ngọc Khánh, quận Ba Đình, Thành Phố Hà Nội.<br />
                                    Giấy phép phê duyệt nội dung số: x1x1x/QĐ-BTTTT cấp ngày 01/12/2021
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className='fixed w-full float top-0 z-50'>
                <div style={{
                    transform: `scale(${ratio})`,
                }} className='float-content absolute  right-0'>
                    <a className='absolute inline-block w-[150px] right-16 top-[350px]' href=''>
                        <img loading='lazy' src='./src/assets/img/registration.png' />
                    </a>

                </div>
            </div>
        </>

    )
}

export default LandingPage