const initComment = {
   id: '',
   content:
      '',
   time: '',
   like: 0,
   unlike: 0,
   liked: false,
   unliked: false,
   author: {}
}

export default function Reducer(state, action) {

   switch (action.type) {
      case 'SET_COMMENTS':
         return [...action.payload.comments]
      case 'COMMENT':
         const comment = {...initComment, ...action.payload.comment}
         console.log(comment);
         return [comment, ...state]
      default:
         return state;
   }
}