import { LOGIN, LOGOUT, AUTHENTICATED } from '../constants';

const user = JSON.parse(localStorage.getItem('user'))

const initUser = {
   id: user?.id || '',
   username: user?.username || '',
   fullname: user?.fullname || '',
   avatar: user?.avatar || ''
}

const testUser = {
   id: '3',
   username: 'caoquocan',
   fullname: 'Cao Quốc Ân',
   avatar: 'https://img.freepik.com/free-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'
}

export default function authReducers(state = initUser, action) {
   switch (action.type) {
      case LOGIN:
         if(action.payload.username === 'caoquocan' && action.payload.password === '123456') {
            localStorage.setItem('user', JSON.stringify(testUser))
            return testUser
         }
         break;
      case LOGOUT:
         localStorage.removeItem('user')
         return {}
      case AUTHENTICATED:
         return !!state.user?.id
      default:
         return state;
   }
}