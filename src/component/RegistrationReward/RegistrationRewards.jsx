import React from 'react'
import useScreenSize from '../../hook/useScreenSize'

function RegistrationRewards() {

  const { screenWidth, screenHeight } = useScreenSize()
  const ratio = screenWidth / 1903
  console.log(screenWidth)
  console.log(ratio)
  return (

    <div className={`relative mt-8`}>
      <div >
        <div className='anchor w-[580px] h-[684px] absolute left-1/2 -translate-x-1/2'>
          <div className='100.000 bg-[url("./src/assets/img/100.000(active).png")] w-[580px] h-[684px] bg-cover absolute grayscale z-50'>

          </div>
          <div className='1.000 bg-[url("./src/assets/img/1.000.png")] w-[285px] h-[261px] bg-cover absolute z-30 -left-[488px] -top-[15px] '>
          </div>
          <div className='40.000 bg-[url("./src/assets/img/40.000.png")] w-[410px] h-[372px] bg-cover absolute grayscale -left-[250px] top-[65px] z-40'>
          </div>
          <div className='60.000 bg-[url("./src/assets/img/60.000.png")] w-[433px] h-[418px] bg-cover absolute grayscale -right-[325px] top-[65px] z-40 '>
          </div>
          <div className='20.000 bg-[url("./src/assets/img/20.000.png")] w-[258px] h-[248px] bg-cover absolute -right-[554px] -top-[15px] z-30'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationRewards

{/* <div className='1.000 bg-[url("./src/assets/img/1.000.png")] w-[285px] h-[261px] bg-cover absolute z-30 left-[118px] -top-[15px]'>
</div>
<div className='40.000 bg-[url("./src/assets/img/40.000.png")] w-[410px] h-[372px] bg-cover absolute left-[360px] top-[65px] z-40'>
</div>
<div className='60.000 bg-[url("./src/assets/img/60.000.png")] w-[433px] h-[418px] bg-cover absolute right-[290px] top-[65px] z-40'>
</div>
<div className='20.000 bg-[url("./src/assets/img/20.000.png")] w-[258px] h-[248px] bg-cover absolute right-[54px] -top-[15px] z-30'> */}