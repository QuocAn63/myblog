const initUser = {
   user_id: '1',
   user_name: 'mototition',
   user_fullname: 'Cao Quốc Ân',
}

function authorReducer (state, action) {
   switch (action.type) {
      case 'login':
         return state
      case 'logout':
         console.log('logout');
         return {}
      default:
         return state
   }
}

export { initUser }

export default  authorReducer