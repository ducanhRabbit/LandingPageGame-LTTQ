import React from 'react'
import DownlBoard from '../DownlBoard'
import RegistrationRewards from '../RegistrationReward/RegistrationRewards'
import Selection from '../Selection'

function Banner() {
    return (
        <div className='relative overflow-hidden'>
            <img className='absolute w-full  object-cover -z-10' src='./src/assets/img/Layer-959.png' />
            <img src=''/>
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
            <section className='2 relative h-[958px]'>
                <img className='absolute object-cover' src='./src/assets/img/la cay.png'/>
                <div className='title'>
                    <img className='mx-auto' src='./src/assets/img/title-pg2.png' />
                </div>

                <RegistrationRewards />
            </section>
            <section className='3 relative w-full pb-28'>

                <img className='w-full absolute bottom-0' src='./src/assets/img/UI-bottom-pg3.png' />
                <div className='title py-12'>
                    <img className='mx-auto' src='./src/assets/img/title-pg3.png' />
                </div>

                <div className='carousel flex w-[80%] mx-auto'>
                    <div className='left w-[50%] px-24 flex flex-col gap-16 items-center'>
                        <div className='char-info w-[500px] flex flex-col text-black'>
                            <div className='text-[3.5rem] relative py-6'>
                                THẦN - Quan Vũ
                                {/* <img className='absolute top-0 right-0' src='./src/assets/img/rare.png' /> */}
                                <div className='w-full h-[2px] bg-black absolute bottom-6 translate-y-1/2'></div>
                                <div className='w-[10px] h-[10px] absolute bottom-6 translate-y-1/2 bg-black rotate-45'></div>
                            </div>
                            <div className='text-justify leading-7'>
                                [NHÂN VẬT] Tuyệt sắc giai nhân. Dùng sắc đẹp và tài năng khéo léo của mình, Điêu Thuyền đã làm cho bánh xe lịch sử phải đổi hướng. Nàng làm theo sắp xếp của Vương Doãn, trở thành thê thiếp của Lữ Bố, Đổng Trác bị Lữ Bố giết vì giành giật nàng.
                            </div>
                        </div>
                        <div className='selection'>
                            <Selection />
                        </div>
                    </div>
                    <div className='right flex-1 relative'>
                        <div className='class absolute -top-20 -z-10 scale-125 right-0 translate-x-8 '>
                            <img src='./src/assets/img/TT-shadow.png' />
                        </div>
                        <div className='w-[780px] mx-auto pt-[7rem]'>
                            <img className='w-full h-full object-cover' src='./src/assets/img/tao-thao.png' />
                        </div>
                        <div className='class absolute top-0 right-0 z-10 translate-x-1/4'>
                            <img src='./src/assets/img/Ngo.png' />
                        </div>

                    </div>
                </div>
            </section>
            <section className='4 '>
                <img src='./src/assets/img/BG-pg4.png' />

            </section>
            <section className='footer'>
                <div className='navigation-footer flex justify-center bg-[#8a1919]'>
                    <div className='px-8 py-4 cursor-pointer'>
                        Trang chủ
                    </div>
                    <div className='px-8 py-4 cursor-pointer'>
                        Trang chủ
                    </div>
                    <div className='px-8 py-4 cursor-pointer'>
                        Trang chủ
                    </div>
                    <div className='px-8 py-4 cursor-pointer'>
                        Trang chủ
                    </div>
                    <div className='px-8 py-4 cursor-pointer'>
                        Trang chủ
                    </div>
                
                </div>
                <div className='py-20 bg-white'>
                    <div className='container-footer w-[1200px] mx-auto'>
                        <img className='mx-auto mb-5' src='./src/assets/img/Vplay-logo.png' />
                        <p className='text-black text-center'>
                            Hotline: <b>098x888x88</b> - Email: <b>hotro@vplay.vn</b> - Chơi quá 180 phút một ngày sẽ ảnh hưởng xấu đến sức khỏe <br />
                            Công ty CP Vplay phân phối độc quyền tại Việt Nam. Địa chỉ: Tầng 7, tòa nhà VTVCab, Số 3, Ngõ 84 Ngọc Khánh, Phường Ngọc Khánh, quận Ba Đình, Thành Phố Hà Nội.<br />
                            Giấy phép phê duyệt nội dung số: x1x1x/QĐ-BTTTT cấp ngày 01/12/2021
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Banner