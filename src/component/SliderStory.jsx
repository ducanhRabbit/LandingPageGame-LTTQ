import React from 'react'

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
                autoplay-deplay='5000'
                pagination='true'
                pagination-el='.pagination'
                pagination-bullet-class='myBullet'
                pagination-bullet-active-class='myActiveBullet'
                pagination-clickable='true'
            >
                <swiper-slide class='w-[585px] md:w-auto'>
                    <img className='w-full' src='./src/assets/img/slider-1.png' />

                </swiper-slide>
                <swiper-slide class='w-[585px] md:w-auto'>
                    <img className='w-full' src='./src/assets/img/slider-2.png' />
                </swiper-slide>
                <swiper-slide class='w-[585px] md:w-auto'>
                    <img className='w-full' src='./src/assets/img/slider-3.png' />
                </swiper-slide>
                <swiper-slide class='w-[585px] md:w-auto'>
                    <img className='w-full' src='./src/assets/img/slider-4.png' />
                </swiper-slide>
                <swiper-slide class='w-[585px] md:w-auto'>
                    <img className='w-full' src='./src/assets/img/slider-5.png' />
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

