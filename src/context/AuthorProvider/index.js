import { createContext, useReducer } from 'react';
import reducer, { initUser } from './reducer'

export const AuthorContext = createContext(null)

export const AuthorProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initUser)

   return (
      <AuthorContext.Provider value={[state, dispatch]}>
         { children }
      </AuthorContext.Provider>
   )
}
