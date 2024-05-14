import React, { useRef, useState } from "react";
import DownlBoard from "./DownlBoard";
import RegistrationRewards from "./RegistrationRewards";
import Selection from "./Selection";
import useScreenSize from "../hook/useScreenSize";
import Slider from "react-slick";
import SliderStory from "./SliderStory";
import Navigation from "./Navigation";
import { FiMenu } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import SocialBoardRelease from "./SocialBoardRelease";
import SocialBoardPreRelease from "./SocialBoardPreRelease";
function LandingPage() {
    const { screenWidth, screenHeight, isMobile } = useScreenSize();
    const ratio = screenWidth / (isMobile ? 768 : 1920);
    // const bannerRef = useRef(null);
    // const registrationRef = useRef(null);
    // const selectionRef = useRef(null);
    // const sliderStoryRef = useRef(null);
    const outterRef = useRef(null);
    const {ref:bannerRef,inView:bannerInView} = useInView({
        /* Optional options */
        threshold: 0.4,
      })
    const {ref:registrationRef,inView:registrationInView} = useInView({
        /* Optional options */
        threshold: 0.4,
      })
    const {ref:selectionRef,inView:selectionInView} = useInView({
        /* Optional options */
        threshold: 0.4,
      })
    const {ref:sliderStoryRef,inView:sliderStoryInView} = useInView({
        /* Optional options */
        threshold: 0.4,
      })
    return (
        <>
            <div
                ref={outterRef}
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
                        <Navigation bannerInView={bannerInView} registrationInView={registrationInView} selectionInView={selectionInView} sliderStoryInView={sliderStoryInView} />
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
                            ref={bannerRef}
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
                                <img src="./src/assets/img/18+.png" />
                            </div>
                            {/* <div className='absolute bottom-10 w-full'>
                            <DownlBoard />
                        </div> */}
                        </section>
                        <section
                            ref={registrationRef}
                            id="Registration"
                            className="2 relative h-[640px] md:h-[1065px] pt-[24px] md:pt-[36px]"
                        >
                            <img
                                loading="lazy"
                                className="absolute scale-110 top-2 md:scale-100 md:-top-10 object-cover"
                                src="./src/assets/img/la cay.png"
                            />
                            <div className="title w-[550px] md:w-auto mx-auto md:pl-[80px]">
                                <img
                                    loading="lazy"
                                    className="object-cover mx-auto "
                                    src="./src/assets/img/title-section2.png"
                                />
                            </div>
                            <div className="sub-title relative mt-[16px]">
                                <div className="text w-[374px] relative mx-auto md:w-auto">
                                    <img className="mx-auto" src="./src/assets/img/sub-title-regis.png" />
                                </div>
                                <div className="absolute w-[117px] md:w-[171px] top-[10px] left-[calc(50%_-_130px)] md:left-[calc(50%_-_194px)]">
                                    <img className="w-full object-cover" src="./src/assets/img/5.000.png" />
                                </div>
                            </div>
                            <RegistrationRewards />
                            <div className="absolute cursor-pointer bottom-[20px] md:bottom-[28px] left-1/2 -translate-x-1/2">
                                <img
                                    loading="lazy"
                                    className="mx-auto md:pl-[80px]"
                                    src="./src/assets/img/Register-now-btn.png"
                                />
                            </div>
                        </section>
                        <section ref={selectionRef} id="Selection" className="3  ">
                            <Selection />
                        </section>
                        <section
                            ref={sliderStoryRef}
                            id="SliderStory"
                            className="4 relative border-none"
                        >
                            <div className="background">
                                <img
                                    loading="lazy"
                                    className="w-full object-cover hidden md:block"
                                    src="./src/assets/img/bg-section4.png"
                                />
                                <img
                                    loading="lazy"
                                    className="w-full object-cover md:hidden"
                                    src="./src/assets/img/bg-section4-mobile.png"
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
                   <SocialBoardPreRelease/>
                    
                </div>


            </div>
        </>
    );
}

export default LandingPage;
