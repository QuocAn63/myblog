import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop({ children }) {
   const location = useLocation()
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [location])

   return (
      children
   )
}

export default ScrollToTop