import React, { useEffect, useRef, useState } from 'react'
import { mockData } from '../apis/mock-data';

function Selection() {
    const swiperRef = useRef(null);
    const { selection: characters } = mockData

    const [currentActiveChar, setCurrentActiveChar] = useState(characters[2])


    const getCharById = (id) => {

        return characters.find((char) => {
            return char._id === id
        })

    }

    useEffect(() => {
        swiperRef.current.addEventListener('swiperslidechangetransitionstart', (e) => {
            setCurrentActiveChar(characters[e.detail[0].realIndex]);
        });
        
    }, [])

    return (
        <div className='w-full pb-28 relative char-info'>
            <div className='char-shadow absolute w-full md:w-auto -right-[100px] top-[160px] md:top-[48px] md:right-0 -z-10'>
                <img loading='lazy' src={currentActiveChar.shadowImg} />
            </div>
            <div className=' w-full absolute -bottom-[2px]'>
                <img loading='lazy' src='./src/assets/img/UI-bottom-pg3.png' />
            </div>
            <div className='title mx-auto w-[500px] py-[12px] md:w-auto md:pb-[80px] md:pt-16'>
                <img loading='lazy' className='mx-auto' src='./src/assets/img/title-section3.png' />
            </div>

            <div className=' flex flex-col gap-4 mx-auto md:gap-0 w-full md:flex-row md:w-[80%] px-[16px]'>
                <div className='left md:w-[50%] flex flex-col gap-4 md:items-center'>
                    <div className='char-info w-[50%] md:w-[500px] relative flex flex-col text-black'>
                        <div className='text-[2rem] md:text-[2.5rem] relative py-6'>
                            <b>{currentActiveChar.class}</b> - <span className='text-[2.5rem]'>{currentActiveChar.name}</span>
                            <div className='w-full h-[2px] bg-black absolute bottom-6 translate-y-1/2'></div>
                            <div className='w-[10px] h-[10px] absolute bottom-6 translate-y-1/2 bg-black rotate-45'></div>
                            <div className='absolute w-[100px] -right-10 top-1/2 -translate-y-1/2 translate-x-1/2'>
                                <img loading='lazy' src="./src/assets/img/Rare.png" alt="" />
                            </div>
                        </div>
                        <div className='text-[1.1rem] text-justify leading-7 h-[145px]'>
                            {currentActiveChar.description}
                        </div>

                    </div>
                    <div className='selection hidden md:block'>
                        <div className='wrapper relative '>
                            <img loading='lazy' className='absolute w-full object-cover z-0 h-full scale-x-110 scale-y-[.9] top-0 right-0' src='./src/assets/img/light.png' />
                            <div className='clickable grid grid-cols-6 w-full absolute'>
                                {characters.map((char, index) => {
                                    return (
                                        <div key={char._id} onClick={() => {
                                            const findChar = getCharById(char._id)
                                            setCurrentActiveChar(findChar)
                                            swiperRef.current.swiper.slideToLoop(index)
                                        }} className='w-full h-[430px] cursor-pointer'></div>
                                    )
                                })}
                            </div>
                            <div className='background grid grid-cols-6'>
                                {characters.map((char, index) => {
                                    const isActive = char._id === currentActiveChar._id
                                    return (
                                        <div key={char._id} className=''>
                                            {isActive ? <img loading='lazy' className='w-full  h-full' src={char.selectImg} /> : <img loading='lazy' className='w-full  h-full' src={char.offImg} />}

                                        </div>
                                    )
                                })}
                                <div  className='prev-btn absolute cursor-pointer -left-[5rem] top-1/2 -translate-y-1/2'>
                                    <img loading='lazy' src='./src/assets/img/prev-btn.png' />
                                </div>
                                <div  className='next-btn absolute -right-[5rem] cursor-pointer top-1/2 -translate-y-1/2'>
                                    <img loading='lazy' src='./src/assets/img/right-btn.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right flex-1 min-h-0 min-w-0  relative'>
                    <div className='pt-[24px]'>
                        <swiper-container ref={swiperRef} class="mySwiper2 "  centered-slides="true"
                            slides-per-view="1"
                            grab-cursor="true"
                            navigation-next-el='.char-info .next-btn'
                            navigation-prev-el='.char-info .prev-btn'
                            loop='true'
                            effect='fade'
                            fade-effect-cross-fade={true}
                            initial-slide='2'>
                            {characters.map((char, index) => {
                                return <swiper-slide key={index} class=''>
                                    <img loading='lazy' className={`w-full  h-full  object-cover `} src={char?.fullBodyImg} />
                                </swiper-slide>
                            })}
                        </swiper-container>

                    </div>
                    <div className='class absolute w-[131px] md:w-auto top-[30px] right-[90px] md:-top-[30px] md:-right-[40px] z-10 md:scale-90 '>
                        <img loading='lazy' src={currentActiveChar.classImg} />
                    </div>
                    <div className='control-mobile block md:hidden'>
                        <div  className='prev-btn absolute top-1/2 z-20'>
                            <img loading='lazy' src='./src/assets/img/prev-btn.png' />
                        </div>
                        <div className='next-btn absolute top-1/2 right-0 z-20'>
                            <img loading='lazy' src='./src/assets/img/right-btn.png' />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Selection