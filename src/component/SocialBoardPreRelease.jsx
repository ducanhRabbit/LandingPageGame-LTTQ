import React from 'react'

function SocialBoardPreRelease() {
    return (
        <div className='float-content absolute right-[2%] top-[120px] md:scale-[.4] xl:scale-[.7] xxl:scale-[.8] origin-top-right hidden md:block'>
            <img className='' src='./src/assets/img/download-right-prerelease-bg.png'></img>
            <div className='flex flex-col w-full absolute top-[144px] justify-center items-center'>
                <a className='mb-[20px]'  href="#">
                    <img  src='./src/assets/img/preregister-btn.png'></img>
                </a>
                <a className='mb-[36px]' href="#">
                    <img  src='./src/assets/img/Qr.png'></img>
                </a>
                <a className='mb-[21px]' href="#">
                    <img  src='./src/assets/img/android-register.png'></img>
                </a>
                <a className='mb-[4px]' href="#">
                    <img  src='./src/assets/img/apple-register.png'></img>

                </a>
                <a className='mb-[4px]' href="#">
                    <img  src='./src/assets/img/group.png'></img>

                </a>
                <a className='mb-[4px]' href="#">
                    <img  src='./src/assets/img/fanpage.png'></img>

                </a>
                <a href="#">
                    <img src='./src/assets/img/prerelease-logo.png'></img>

                </a>


            </div>



        </div>
    )
}

export default SocialBoardPreRelease