import React from 'react'
import Slider from "react-slick";
function Selection() {
    return (
        <div className='wrapper  w-[500px] mx-auto relative '>
            <img className='absolute w-full object-cover z-0 h-full top-0 right-0 scale-x-[1.12] scale-y-[.8]' src='./src/assets/img/light.png' />
            <div className='clickable grid grid-cols-5 absolute'>
                <div onClick={() => {
                    console.log(1)
                }} className='w-[100px] h-[430px] cursor-pointer'></div>
                <div onClick={() => {
                    console.log(2)
                }} className='w-[100px] h-[430px] cursor-pointer'></div>
                <div className='w-[100px] h-[430px] cursor-pointer'></div>
                <div className='w-[100px] h-[430px] cursor-pointer'></div>
                <div className='w-[100px] h-[430px] cursor-pointer'></div>
            </div>
            <div className='background grid grid-cols-5'>
                <div className='hover:cursor-pointer'>
                    <img className='w-full  h-full' src='./src/assets/img/TT-select.png' />
                </div>
                <div>
                    <img className='w-full hover:cursor-pointer h-full' src='./src/assets/img/TK-select.png' />
                </div>
                <div>
                    <img className='w-full hover:cursor-pointer h-full' src='./src/assets/img/QV-select.png' />
                </div>
                <div>
                    <img className='w-full hover:cursor-pointer h-full' src='./src/assets/img/DT-select.png' />
                </div>
                <div>
                    <img className='w-full hover:cursor-pointer h-full' src='./src/assets/img/LB-select.png' />
                </div>
                <div className='prev-btn absolute -left-[5rem] top-1/2 -translate-y-1/2'>
                    <img src='./src/assets/img/prev-btn.png' />
                </div>
                <div className='next-btn absolute -right-[5rem] top-1/2 -translate-y-1/2'>
                    <img src='./src/assets/img/right-btn.png' />
                </div>
            </div>
        </div>
    );
}

export default Selection