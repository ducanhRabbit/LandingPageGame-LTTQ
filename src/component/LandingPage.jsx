import React, { useRef, useState } from 'react'
import DownlBoard from './DownlBoard'
import RegistrationRewards from './RegistrationRewards'
import Selection from './Selection'
import useScreenSize from '../hook/useScreenSize'
import Slider from 'react-slick'
import SliderStory from './SliderStory'
import Navigation from './Navigation'

function LandingPage() {
    const { screenWidth, screenHeight,isMobile } = useScreenSize()
    const ratio = screenWidth / (isMobile?768:1920)
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
                }} className={`absolute md:w-[1920px] w-[768px] origin-top-left`}>
                    {/* <Navigation outterRef={outterRef} observerRefs={[bannerRef,registrationRef,selectionRef,sliderStoryRef]}/> */}
                    <img loading='lazy' className='absolute w-full   object-cover -z-10' src='./src/assets/img/main-bg.png' />
                    <section ref={bannerRef} id='Banner' className='1 relative overflow-hidden  md:pt-[57px] md:h-[1142px]'>

                        <div className='max-w-[1383px] w-[90%] mx-auto relative'>
                            <img loading='lazy' className='w-full md:ml-[75px]' src='./src/assets/img/main_char.png' />
                            <div className='logo absolute  -top-[24px] left-[120px] cursor-pointer'>
                                <img loading='lazy' src="./src/assets/img/logo.png" alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col items-center absolute bottom-[140px] w-full gap-[84px]'>
                            <div className='cursor-pointer play-btn z-20 ml-[128px]'>
                                <img loading='lazy' src='./src/assets/img/play_btn.png' />
                            </div>
                            <div className='logan -my-[200px] min-h-0 ml-[160px]'>
                                <img loading='lazy' className='w-full' src='./src/assets/img/tittle.png' />
                            </div>
                        </div>
                        {/* <div className='absolute bottom-10 w-full'>
                            <DownlBoard />
                        </div> */}
                    </section>
                    <section ref={registrationRef} id='Registration' className='2 relative md:h-[1065px] pt-[36px]'>
                        <img loading='lazy' className='absolute -top-10 object-cover' src='./src/assets/img/la cay.png' />
                        <div className='title'>
                            <img loading='lazy' className='mx-auto pl-[80px]' src='./src/assets/img/title-section2.png' />
                        </div>
                        <div className='sub-title mt-[16px]'>
                            <div className='main-text'>Đã có</div>
                        </div>
                        <RegistrationRewards />
                        <div className='absolute bottom-[28px] left-1/2 -translate-x-1/2'>
                        <img loading='lazy' className='mx-auto pl-[80px]' src='./src/assets/img/Register-now-btn.png' />
                        </div>
                    </section>
                    <section ref={selectionRef} id='Selection' className='3  '>
                        <Selection />

                    </section>
                    <section ref={sliderStoryRef} id='SliderStory' className='4 relative border-none'>
                        <div className='background'>
                            <img loading='lazy' className='w-full object-cover' src='./src/assets/img/bg-section4.png' />
                        </div>
                        <div className='title absolute top-0 left-1/2 -translate-x-1/2'>
                            <img loading='lazy' className='mx-auto pl-[80px]' src='./src/assets/img/title-section4.png' />
                        </div>
                        <div className='content absolute top-[215px] left-[266px]'>
                            <div className='w-[1430px] h-[710px] py-[34px] relative '>
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
            {/* <div className='fixed w-full float top-0 z-50'>
                <div className='float-content absolute right-[2%] top-[120px] scale-[.85] origin-top-right'>
                        <img className='' src='./src/assets/img/download-right-float-bg.png'></img>
                        <div className='flex flex-col w-full absolute top-[155px] justify-center items-center'>
                            <img className='mb-[36px]'  src='./src/assets/img/Qr.png'></img>
                            <img className='mb-[21px]' src='./src/assets/img/android.png'></img>
                            <img className='mb-[21px]' src='./src/assets/img/ios.png'></img>
                            <img className='mb-[4px]' src='./src/assets/img/apk1.png'></img>
                            <img className='mb-[4px]' src='./src/assets/img/group.png'></img>
                            <img className='mb-[4px]' src='./src/assets/img/fanpage.png'></img>
                            <img className='' src='./src/assets/img/nap ngay.png'></img>

                        </div>



                </div>
            </div> */}
        </>

    )
}

export default LandingPage