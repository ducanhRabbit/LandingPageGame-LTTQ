
import React, { useRef, useState } from "react";
import RegistrationRewards from "../component/RegistrationRewards";
import Selection from "../component/Selection";
import useScreenSize from "../hook/useScreenSize";
import SliderStory from "../component/SliderStory";
import Navigation from "../component/Navigation";
import DownlBoard from "../component/DownlBoard";
import { FiMenu } from "react-icons/fi";
import { TbCirclePlus } from "react-icons/tb";
import SocialBoardPreRelease from "../component/SocialBoardPreRelease";
function HomePage() {
    const { screenWidth, screenHeight, isMobile } = useScreenSize();
    const ratio = screenWidth / (isMobile ? 768 : 1920);
    return (
        <>
            <div
                className="outter mx-auto scroll-smooth relative w-full h-screen overflow-x-hidden"
            >
                <header className="flex fixed max-h-[120px]  w-full z-50 top-0 right-0 justify-between py-[12px] px-[14px] bg-black md:hidden">
                    <div className="flex items-center gap-[10px]">
                        <img className="w-[53px] xs:w-[80px] sm:w-[100px] rounded-[16px] border-[2px] border-white" src="./src/assets/img/logo-mobile.png"></img>
                        <div className="flex flex-col gap-1">
                            <div className="text-[12px] xs:text-[16px] sm:text-[24px] text-[#f3e492]">
                                Lục Tung Tam Quốc
                            </div>
                            <div className="text-[10px] xs:text-[12px] sm:text-[16px]">Open Beta 30/06</div>
                        </div>
                    </div>
                    <div className="flex items-center  justify-center gap-2">
                        <button className="w-[120px] xs:w-[160px] sm:w-auto">
                            <img src="./src/assets/img/download.png"></img>
                        </button>
                        <button>
                            <FiMenu className="w-[25px] xs:w-[50px] sm:w-auto" size={62} />
                        </button>
                    </div>
                </header>
                <div className="wrapper mt-[80px] xs:mt-[100px] md:mt-0">
                    <div
                        style={{
                            transform: `scale(${ratio})`,
                        }}
                        className={`absolute overflow-clip md:w-[1920px] w-[768px]  md:mt-0 origin-top-left`}
                    >
                        {/* <Navigation bannerInView={bannerInView} registrationInView={registrationInView} selectionInView={selectionInView} sliderStoryInView={sliderStoryInView} /> */}
                        <img
                            loading="lazy"
                            className="absolute w-full hidden md:block  object-cover -z-10"
                            src="./src/assets/img/main-bg.png"
                        />
                        <img
                            loading="lazy"
                            className="absolute w-full block md:hidden  object-cover -z-10"
                            src="./src/assets/img/bg-mobile.png"
                        />
                        <section
                            id="Banner"
                            className="1 relative  h-[700px]  md:pt-[57px] md:h-[1142px]"
                        >
                            <div className="max-w-[1383px] w-[90%] mx-auto relative">
                                <img
                                    loading="lazy"
                                    className="w-full scale-125 object-[0px_-28px] md:object-center origin-top md:origin-center  md:scale-100  object-cover md:ml-[75px] "
                                    src="./src/assets/img/main_char.png"
                                />
                                <div className="logo absolute w-[236px] md:w-auto top-[268px] left-1/2 -translate-x-1/2 md:-top-[24px] md:left-[120px] cursor-pointer">
                                    <img loading="lazy" src="./src/assets/img/logo.png" alt="" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center absolute bottom-[180px] md:bottom-[140px] w-full gap-[84px]">
                                <div className="cursor-pointer w-[84px] md:w-auto play-btn z-20 mb-2 mr-[320px] md:mr-0 md:mb-0 md:ml-[128px]">
                                    <img loading="lazy" src="./src/assets/img/play_btn.png" />
                                </div>
                                <div className="logan w-[655px] md:w-auto -my-[220px]  md:-my-[200px] min-h-0 ml-[48px] md:ml-[160px]">
                                    <img
                                        loading="lazy"
                                        className="w-full"
                                        src="./src/assets/img/tittle.png"
                                    />
                                </div>
                            </div>
                            <div className="18+ absolute top-[36px] right-[8px] md:top-[660px] md:left-[90px]">
                                <img loading="lazy" src="./src/assets/img/18+.png" />
                            </div>
                        </section>
                        <section
                            id="Registration"
                            className="2 relative "
                        >
                            <div className="wrapper px-3">
                            <div className="flex justify-center items-center gap-[24px]">
                                <div className="playNow_btn cursor-pointer">
                                    <img className="-mt-[24px]" src="./src/assets/img/playNow-btn.png"></img>
                                </div>

                                <DownlBoard></DownlBoard>
                            </div>
                            <div className="notice-board mt-[60px]">
                                <div className="md:w-[1280px] md:h-[435px] relative  bg-white mx-auto shadow-[4px_4px_8px_2px_rgb(0_0_0_/.3)]">
                                    <div className="top-line absolute z-0 top-[450px]  md:top-0 md:right-0 w-full h-[80px]">
                                        <img src="./src/assets/img/top-decor.png" className="w-full h-full object-cover"></img>
                                    </div>
                                    <div className="flex md:flex-row  flex-col relative h-full">
                                        <div className="md:w-[60%]">
                                            <swiper-container class="mySwiper3 md:scale-y-110 md:h-full md:pl-8"
                                                slides-per-view="1"
                                                grab-cursor="true"
                                                loop='true'
                                            >

                                                <swiper-slide class=''>
                                                    <img loading='lazy' className={` w-full  h-full  object-cover`} src="./src/assets/img/new-slide.png" />
                                                </swiper-slide>
                                                <swiper-slide class='h-full'>
                                                    <img loading='lazy' className={` w-full  h-full  object-cover`} src="./src/assets/img/slider-1.png" />
                                                </swiper-slide>

                                            </swiper-container>

                                        </div>
                                        <div className="flex-1">
                                            <div className="notice-content pt-6 px-6 pr-8 flex flex-col h-full justify-between">
                                                <div className="tabs-control flex justify-between items-center">
                                                    <div className="flex gap-4">
                                                        <button className="text-3xl p-3 md:text-2xl md:p-2">
                                                            Tin tức
                                                        </button>
                                                        <button className="text-3xl p-3 md:text-2xl md:p-2">
                                                            Sự kiện
                                                        </button>
                                                        <button className="text-3xl p-3 md:text-2xl md:p-2">
                                                            Hướng Dẫn
                                                        </button>
                                                    </div>
                                                    <div className="p-2 cursor-pointer">
                                                        <TbCirclePlus size={24} />
                                                    </div>
                                                </div>
                                                <div className="tab-content text-[18px] flex-1 py-[20px] justify-between text-black flex flex-col ">
                                                    <ul>
                                                        <li className="py-3 ">
                                                            <a className="hover:text-[#033e65] text-[26px]" href="">
                                                                <p>Cảnh báo Lừa Đảo và Khóa Tài Khoản Nạp Lậu</p>
                                                            </a>
                                                            <div className="text-sm">
                                                                26/04/2024 - 16:08:34
                                                            </div>
                                                        </li>
                                                        <li className="py-3 [border-image:_linear-gradient(270deg,transparent_1%,#620b0c_50%,transparent)_100%_0_100%_0_/_1px_0_1px_0_stretch]">
                                                            <a className="hover:text-[#033e65] text-[26px]" href="">
                                                                <p>[Thông báo] Thời gian bảo trì và nội dung Update và có
                                                                    gói quà cho các chu vị huỳnh đài trong ngày trọng ....</p>
                                                            </a>
                                                            <div className="text-sm">
                                                                26/04/2024 - 16:08:34
                                                            </div>
                                                        </li>
                                                        <li className="py-3 ">
                                                            <a className="hover:text-[#033e65] text-[26px]" href="">
                                                                <p>[Thông báo] Thời gian bảo trì và nội dung Update và có
                                                                    gói quà cho các chu vị huỳnh đài trong ngày trọng ....</p>
                                                            </a>
                                                            <div className="text-sm">
                                                                26/04/2024 - 16:08:34
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="text-right">
                                                        <button  className="text-black p-2 text-[26px] hover:text-[#033e65]">
                                                            Xem thêm
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex justify-center gap-4 mt-[48px]">
                                <button>
                                    <img src="./src/assets/img/Charge-btn.png" />
                                </button>
                                <button>
                                    <img src="./src/assets/img/newbie-btn.png" />
                                </button>
                                <button>
                                    <img src="./src/assets/img/fanpage-btn.png" />
                                </button>
                                <button>
                                    <img src="./src/assets/img/CSKH.png" />
                                </button>
                            </div>

                            </div>
                        </section>
                        <section id="Selection" className="3  ">
                            <Selection />
                        </section>
                        <section

                            id="SliderStory"
                            className="4 relative border-none"
                        >
                            <div className="background">
                                <img
                                    loading="lazy"
                                    className="w-full object-cover hidden md:block"
                                    src="./src/assets/img/slider-story-home-bg.png"
                                />
                                <img
                                    loading="lazy"
                                    className="w-full object-cover md:hidden"
                                    src="./src/assets/img/home-slider-story-mb.png"
                                />
                            </div>
                            <div className="title absolute top-0 left-1/2 -translate-x-1/2">
                                <img
                                    loading="lazy"
                                    className="mx-auto md:pl-[80px]"
                                    src="./src/assets/img/title-section4.png"
                                />
                            </div>
                            <div className="content absolute top-[110px] left-[15px] md:top-[215px] md:left-[266px]">
                                <div className="w-[726px] h-[364px] py-[20px] md:w-[1430px] md:h-[710px] md:py-[34px] relative ">
                                    <SliderStory />
                                </div>
                            </div>
                        </section>
                        <section className="rank relative min-h-[1200px]">
                            <div className="absolute -top-[100px] md:-top-[200px] -z-10 bg-white">
                                <img className="object-cover z-0" src="./src/assets/img/test-bg.png" />
                            </div>
                            <div className="absolute md:-top-[60px] left-1/2 -translate-x-1/2">
                                <img className="mx-auto " src="./src/assets/img/rank-title.png"></img>
                            </div>
                            <div className="wrapper  mx-auto">
                                <div className="rank-table relative pt-[80px] pb-[290px] flex flex-col">
                                    <img className="absolute -z-10" src="./src/assets/img/rank-board.png"></img>
                                    <div className="rank-categories pt-[140px]">
                                        <div className="flex justify-center font-gothic">
                                            <div className="relative cursor-pointer">
                                                <img src="./src/assets/img/rank-tab(active).png"></img>
                                                <span className="text-[40px] text-[#693e03] absolute top-[38px] left-[125px]">BXH Server</span>
                                            </div>
                                            <div className="relative cursor-pointer">
                                                <img src="./src/assets/img/rank-tab(unactive).png"></img>
                                                <span className="text-[40px] text-[#383838] absolute top-[38px] left-[125px]">BXH Bang Hội</span>
                                            </div>
                                            <div className="relative cursor-pointer">
                                                <img src="./src/assets/img/rank-tab(unactive).png"></img>
                                                <span className="text-[40px] text-[#383838] absolute top-[38px] left-[125px]">BXH TOP Cụm</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[1000px] mx-auto h-[700px] overflow-auto mt-[50px]">
                                        <table className="w-full">
                                            <thead className="absolute top-[360px] w-[1000px]">
                                                <tr className="w-full text-[30px] flex">
                                                    <th className="w-[80px]" >Hạng</th>
                                                    <th className="w-[360px]">Tên nhân vật</th>
                                                    <th className="w-[260px]">Server</th>
                                                    <th className="flex-1">Lực chiến</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-[30px] text-center">
                                                <tr className="border-b-2 border-[#54493b]">

                                                    <td className="h-[60px] pl-2" width={80}>
                                                        <img  src="./src/assets/img/first-rank.png"></img>
                                                    </td>
                                                    <td className="" width={360}>
                                                        xxxxxx
                                                    </td>
                                                    <td width={260}>
                                                        Chiến Thần 310
                                                    </td>
                                                    <td className="break-all">
                                                    1,201,546,211,23454
                                                    </td>
                                                </tr>
                                                <tr className="border-b-2 border-[#54493b]">

                                                    <td className="h-[60px] pl-2" width={80}>
                                                        <img  src="./src/assets/img/second-rank.png"></img>
                                                    </td>
                                                    <td className="" width={360}>
                                                        xxxxxx
                                                    </td>
                                                    <td width={260}>
                                                        Server xxxx
                                                    </td>
                                                    <td>
                                                    1,201,546,211,234
                                                    </td>
                                                </tr>
                                                <tr className="border-b-2 border-[#54493b]">

                                                    <td className="h-[60px] pl-2" width={80}>
                                                        <img  src="./src/assets/img/third-rank.png"></img>
                                                    </td>
                                                    <td className="" width={360}>
                                                        xxxxxx
                                                    </td>
                                                    <td width={260}>
                                                        Server xxxx
                                                    </td>
                                                    <td>
                                                    1,201,546,211,234
                                                    </td>
                                                </tr>
                                                
                                                <tr className="border-b-2 border-[#54493b]">

                                                    <td className="h-[60px]" width={80}>
                                                        4
                                                    </td>
                                                    <td className="" width={360}>
                                                        xxxxxx
                                                    </td>
                                                    <td width={260}>
                                                        Server xxxx
                                                    </td>
                                                    <td>
                                                    1,201,546,211,234
                                                    </td>
                                                </tr>
                                                <tr className="border-b-2 border-[#54493b]">

                                                    <td className="h-[60px]" width={80}>
                                                        4
                                                    </td>
                                                    <td className="" width={360}>
                                                        xxxxxx
                                                    </td>
                                                    <td width={260}>
                                                        Server xxxx
                                                    </td>
                                                    <td>
                                                    1,201,546,211,234
                                                    </td>
                                                </tr>
                                                <tr className="border-b-2 border-[#54493b]">

                                                    <td className="h-[60px]" width={80}>
                                                        4
                                                    </td>
                                                    <td className="" width={360}>
                                                        xxxxxx
                                                    </td>
                                                    <td width={260}>
                                                        Server xxxx
                                                    </td>
                                                    <td>
                                                    1,201,546,211,234
                                                    </td>
                                                </tr>
                                                <tr className="border-b-2 border-[#54493b]">

                                                    <td className="h-[60px]" width={80}>
                                                        4
                                                    </td>
                                                    <td className="" width={360}>
                                                        xxxxxx
                                                    </td>
                                                    <td width={260}>
                                                        Server xxxx
                                                    </td>
                                                    <td>
                                                    1,201,546,211,234
                                                    </td>
                                                </tr>
                                                <tr className="border-b-2 border-[#54493b]">

                                                    <td className="h-[60px]" width={80}>
                                                        4
                                                    </td>
                                                    <td className="" width={360}>
                                                        xxxxxx
                                                    </td>
                                                    <td width={260}>
                                                        Server xxxx
                                                    </td>
                                                    <td>
                                                    1,201,546,211,234
                                                    </td>
                                                </tr>
                                                <tr className="border-b-2 border-[#54493b]">

                                                    <td className="h-[60px]" width={80}>
                                                        4
                                                    </td>
                                                    <td className="" width={360}>
                                                        xxxxxx
                                                    </td>
                                                    <td width={260}>
                                                        Server xxxx
                                                    </td>
                                                    <td>
                                                    1,201,546,211,234
                                                    </td>
                                                </tr>
                                                <tr className="border-b-2 border-[#54493b]">

                                                    <td className="h-[60px]" width={80}>
                                                        4
                                                    </td>
                                                    <td className="" width={360}>
                                                        xxxxxx
                                                    </td>
                                                    <td width={260}>
                                                        Server xxxx
                                                    </td>
                                                    <td>
                                                    1,201,546,211,234
                                                    </td>
                                                </tr>
                                                <tr className="border-b-2 border-[#54493b]">

                                                    <td className="h-[60px]" width={80}>
                                                        4
                                                    </td>
                                                    <td className="" width={360}>
                                                        xxxxxx
                                                    </td>
                                                    <td width={260}>
                                                        Server xxxx
                                                    </td>
                                                    <td>
                                                    1,201,546,211,234
                                                    </td>
                                                </tr>
                                                <tr className="border-b-2 border-[#54493b]">

                                                    <td className="h-[60px]" width={80}>
                                                        4
                                                    </td>
                                                    <td className="" width={360}>
                                                        xxxxxx
                                                    </td>
                                                    <td width={260}>
                                                        Server xxxx
                                                    </td>
                                                    <td>
                                                    1,201,546,211,234
                                                    </td>
                                                </tr>
                                                <tr className="border-b-2 border-[#54493b]">

                                                    <td className="h-[60px]" width={80}>
                                                        4
                                                    </td>
                                                    <td className="" width={360}>
                                                        xxxxxx
                                                    </td>
                                                    <td width={260}>
                                                        Server xxxx
                                                    </td>
                                                    <td>
                                                    1,201,546,211,234
                                                    </td>
                                                </tr>
                                                <tr className="border-b-2 border-[#54493b]">

                                                    <td className="h-[60px]" width={80}>
                                                        4
                                                    </td>
                                                    <td className="" width={360}>
                                                        xxxxxx
                                                    </td>
                                                    <td width={260}>
                                                        Server xxxx
                                                    </td>
                                                    <td>
                                                    1,201,546,211,234
                                                    </td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className="footer">
                            <div className="navigation-footer md:flex justify-center bg-[#8a1919] hidden">
                                <div className="px-8 py-4 cursor-pointer">Trang chủ</div>
                                <div className="px-8 py-4 cursor-pointer">Fanpage</div>
                                <div className="px-8 py-4 cursor-pointer">Sự kiện</div>
                                <div className="px-8 py-4 cursor-pointer">Cộng đồng</div>
                                <div className="px-8 py-4 cursor-pointer">Hỗ trợ</div>
                            </div>
                            <div className="py-8 md:py-20 bg-black md:bg-white">
                                <div className="container-footer max-w-[1200px] mx-auto">
                                    <img
                                        loading="lazy"
                                        className="mx-auto mb-5"
                                        src="./src/assets/img/Vplay-logo.png"
                                    />
                                    <p className="md:text-black text-center">
                                        Hotline: <b>098x888x88</b> - Email: <b>hotro@vplay.vn</b> -
                                        Chơi quá 180 phút một ngày sẽ ảnh hưởng xấu đến sức khỏe{" "}
                                        <br />
                                        Công ty CP Vplay phân phối độc quyền tại Việt Nam. Địa chỉ:
                                        Tầng 7, tòa nhà VTVCab, Số 3, Ngõ 84 Ngọc Khánh, Phường Ngọc
                                        Khánh, quận Ba Đình, Thành Phố Hà Nội.
                                        <br />
                                        Giấy phép phê duyệt nội dung số: x1x1x/QĐ-BTTTT cấp ngày
                                        01/12/2021
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className='fixed w-full float top-0 z-50'>
                    {/* <SocialBoardRelease/> */}
                    {/* <SocialBoardPreRelease />
                    <div className="scale-[.5] xl:scale-[.6] xxl:scale-[.8] xxxl:scale-100 origin-top-left">
                        <Navigation  />
                    </div> */}
                </div>


            </div>
        </>
    );
}

export default HomePage