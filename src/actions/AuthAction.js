import * as types from '../constants'

export const login = ({ username, password }) => {
   return {
      type: types.LOGIN,
      user: { username, password }
   }
}

export const logout = () => {
   return {
      type: types.LOGOUT
   }
}

export const isAuthenticated = () => {
   return {
      type: types.AUTHENTICATED
   }
}