import { AuthorContext } from '../context';
import { useContext } from 'react';

export const useAuthorization = () => {
   const [state, dispatch] = useContext(AuthorContext)

   const login = () => {
      dispatch({type: 'login'})
   }

   const logout = () => {
      dispatch({type: 'logout'})
   }

   const isAuthenticated = () => {
      return !!state.id
   }

   return {
      user: state,
      isAuthenticated,
      login,
      logout
   }
}