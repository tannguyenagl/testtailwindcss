import { useState, useEffect } from 'react'

export const useWindowScrollMatch = (height:number) => {
  const [isMatch, setWindowHeightMatch] = useState(false)
  
  useEffect(() => {
    function handleScroll() {
    if(window.scrollY > height && !isMatch){
        setWindowHeightMatch(true)
    }
    if(window.scrollY < height && isMatch){
        setWindowHeightMatch(false)
    }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMatch])
  return isMatch
}