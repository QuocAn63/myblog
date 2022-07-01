import { LOGIN, LOGOUT, AUTHENTICATED } from '../constants';

const initUser = {
   id: '',
   username: '',
   fullname: 'Cao Quốc Ân',
   avatar: ''
}

export default function authReducers(state = initUser, action) {
   switch (action.type) {
      case LOGIN:
         return {
            ...initUser,
            ...action.user
         }
      case LOGOUT:
         return {}
      case AUTHENTICATED:
         return !!state.user.id
      default:
         return state;
   }
}