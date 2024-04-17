import React from 'react'
import Slider from "react-slick";
function Selection() {
      return (
        <div className='wrapper grid grid-cols-5 w-[500px] mx-auto relative'>
            <div>
                <img className='w-full grayscale' src='./src/assets/img/TT-select.png'/>
            </div>
            <div>
                <img className='w-full' src='./src/assets/img/TT-select.png'/>
            </div>
            <div>
                <img className='w-full' src='./src/assets/img/TT-select.png'/>
            </div>
            <div>
                <img className='w-full' src='./src/assets/img/TT-select.png'/>
            </div>
            <div>
                <img className='w-full' src='./src/assets/img/TT-select.png'/>
            </div>
            <img className='absolute w-[calc(100%_+_8px)] h-full top-0 right-0' src='./src/assets/img/light.png'/>
        </div>
      );
}

export default Selection