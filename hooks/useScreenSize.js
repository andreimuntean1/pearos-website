import { useEffect, useState } from 'react'

export const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState()

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return windowSize
}