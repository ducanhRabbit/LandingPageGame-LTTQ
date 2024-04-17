import React, { useEffect, useState } from 'react'

function useScreenSize() {
    const [screenHeight,setScreenHeight] = useState(window.innerHeight)
    const [screenWidth,setScreenWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = ()=>{
            setScreenHeight(window.innerHeight)
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return ()=>{
            window.removeEventListener('resize',handleResize)
        } 
            
    },[window.innerHeight,window.innerWidth])

  return {screenHeight,screenWidth}
}

export default useScreenSize