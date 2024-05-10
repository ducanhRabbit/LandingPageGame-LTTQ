import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import Slider from 'react-slick'

function SliderStory() {
    const sliderData = [...Array(5)]
    return (
        <div className='slider px-[60px] md:px-[80px] md:h-full'>
            <swiper-container

                class="mySwiper " effect="coverflow" grab-cursor="true" centered-slides="true"
                slides-per-view="1.1" coverflow-effect-stretch="0" coverflow-effect-depth="300" coverflow-effect-rotate="0"
                coverflow-effect-modifier="1" coverflow-effect-slide-shadows='true'
                navigation-next-el='.slider .next-btn'
                navigation-prev-el='.slider .prev-btn'
                loop='true'
                css-mode='false'
                initial-slide='2'
                autoplay='true'
                autoplay-deplay = '1000'
                pagination='true'
                pagination-el='.pagination'
                pagination-bullet-class='myBullet'
                pagination-bullet-active-class='myActiveBullet'
                pagination-clickable='true'


            >
                <swiper-slide class='w-[585px] md:w-auto'>
                    <div className=''>
                        <img className='' src='./src/assets/img/slider-1.png' />

                    </div>
                </swiper-slide>
                <swiper-slide class='w-[585px] md:w-auto'>
                    <div className=''>
                        <img className='' src='./src/assets/img/slider-2.png' />
                    </div>
                </swiper-slide>
                <swiper-slide class='w-[585px] md:w-auto'>
                    <div className=''>
                        <img className='' src='./src/assets/img/slider-3.png' />
                    </div>
                </swiper-slide>
                <swiper-slide class='w-[585px] md:w-auto'>
                    <div className=''>
                        <img className='' src='./src/assets/img/slider-4.png' />
                    </div>
                </swiper-slide>
                <swiper-slide class='w-[585px] md:w-auto'>
                    <div className=''>
                        <img className='w-full' src='./src/assets/img/slider-5.png' />
                    </div>
                </swiper-slide>
            </swiper-container>
            <div className='control'>
                <div className='prev-btn absolute top-1/2 left-[10px] md:left-6 cursor-pointer'>
                    <img loading='lazy' src='./src/assets/img/prev-slider.png' />
                </div>
                <div className='next-btn absolute top-1/2 right-[10px] md:right-6 cursor-pointer'>
                    <img loading='lazy' src='./src/assets/img/next-slide.png' />
                </div>
            </div>

            <div className='pagination flex items-center left-[200px] gap-[55px] md:left-[480px] md:gap-[90px] justify-center absolute z-10 -bottom-[44px]'>
            </div>
            <div className='track md:w-[480px] w-[320px] absolute border-dotted -bottom-[30px] left-[210px] md:left-[484px] border-[#fbf2a7] border-t-4 '></div>

        </div>
    )
}

export default SliderStory


{/* <div className='wrapper ml-8'>
                <Slider ref={slider}  {...settings}>
                    {sliderData.map((slide, index) => {
                        return (
                            <div key={index} className='slide-item '>
                                <img loading='lazy' src={`./src/assets/img/slide-${index + 1}.png`} alt="" />
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <div onClick={() => slider?.current?.slickPrev()} className=' prev-btn cursor-pointer absolute bottom-[85px] left-8 px-2'>
                <img loading='lazy' src='./src/assets/img/prev-slider.png' />
            </div>
            <div onClick={() => slider?.current?.slickNext()} className='next-btn cursor-pointer absolute right-[145px] bottom-[85px]'>
                <img loading='lazy' src='./src/assets/img/next-slide.png' />
            </div>
            <div className='pagination absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-around gap-7'>
                <div className='track w-[384px] absolute border-dotted -z-10 border-black border-t-4'>

                </div>
                {sliderData.map((slide, index) => {
                    return (
                        <div key={index}  onClick={() => slider?.current?.slickGoTo(index)} className='cursor-pointer page w-[25px] h-[25px] flex justify-center items-center '>
                            {currentSlideIndex === index?<img loading='lazy' src='./src/assets/img/active-dot-slider.png' />:<img loading='lazy' src='./src/assets/img/dot-slider.png' />}
                  
                        </div>
                    )
                })}
            </div> */}

// mx-auto w-[585px] md:w-auto object-cover
