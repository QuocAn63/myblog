import reducer from './reducer'
import { createContext,useReducer } from 'react';

export const CommentContext = createContext({})

export const CommentProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, [])

   return (
      <CommentContext.Provider value={[state, dispatch]}>
         { children }
      </CommentContext.Provider>
   )
}