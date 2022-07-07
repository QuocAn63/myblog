import { useEffect } from "react";

export const useOnClickOutside = (
    ref,
    handler,
    active = true
  ) => {
    useEffect(() => {
      if (!active) return;
      const listener = (event) => {
        const refs = Array.isArray(ref) ? ref : [ref];
        
        let contains = false;
        refs.forEach(r => {
          if (!r.current || r.current.contains(event.target)) {
            contains = true;
            return;
          }
        });
        event.stopPropagation();
        if (!contains) handler(event);
      }
  
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
  
      return () => {
        if (!active) return;
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler, active]);
  }