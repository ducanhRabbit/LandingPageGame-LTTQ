import React, { useEffect, useState } from 'react'

function useScreenSize() {
    const [screenHeight,setScreenHeight] = useState(window.innerHeight)
    const [screenWidth,setScreenWidth] = useState(window.innerWidth)
    const [isMobile,setIsMobile] = useState(false)
    useEffect(()=>{
        const handleResize = ()=>{
            setScreenHeight(window.innerHeight)
            setScreenWidth(window.innerWidth)
        }
        if(window.innerWidth >=769){
            setIsMobile(false)
        }else{
            setIsMobile(true)
        }
        window.addEventListener('resize', handleResize)
        return ()=>{
            window.removeEventListener('resize',handleResize)
        } 
            
    },[window.innerHeight,window.innerWidth])

  return {screenHeight,screenWidth, isMobile}
}

export default useScreenSize