import React from 'react'
import DownlBoard from '../DownlBoard'
import RegistrationRewards from '../RegistrationReward/RegistrationRewards'

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
            <section className='2 h-[958px]'>
                <div className='title'>
                    <img className='mx-auto' src='./src/assets/img/title-pg2.png' />
                </div>
                <RegistrationRewards />
            </section>
            <section className='3'>
                <div className='title py-12'>
                    <img className='mx-auto' src='./src/assets/img/title-pg3.png' />
                </div>

                <div className='carousel flex'>
                    <div className='left w-[50%]'>
                        <div className='char-info'>
                            <div className='text-[20px] relative'>
                                THẦN - Quan Vũ
                                    <img className='absolute top-0 right-0' src='./src/assets/img/rare.png'/>
                            </div>
                            <div>
                            [NHÂN VẬT] Tuyệt sắc giai nhân. Dùng sắc đẹp và tài năng khéo léo của mình, Điêu Thuyền đã làm cho bánh xe lịch sử phải đổi hướng. Nàng làm theo sắp xếp của Vương Doãn, trở thành thê thiếp của Lữ Bố, Đổng Trác bị Lữ Bố giết vì giành giật nàng.
                            </div>
                        </div>
                        <div className='selection'>

                        </div>
                    </div>
                    <div className='right flex-1'>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner