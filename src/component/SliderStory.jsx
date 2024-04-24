import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import Slider from 'react-slick'

function SliderStory() {
    const sliderData = [...Array(7)]
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const slider = useRef(null)
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        beforeChange: (currentIndex, nextIndex) => {
            setCurrentSlideIndex(nextIndex)
        }

    };
    return (
        <div className='slider'>
            <div className='wrapper ml-8'>
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
            </div>
        </div>
    )
}

export default SliderStory