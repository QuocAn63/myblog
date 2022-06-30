const initUser = {
   id: '1',
   username: 'mototition',
   fullname: 'Cao Quốc Ân',
   avatar: ''
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