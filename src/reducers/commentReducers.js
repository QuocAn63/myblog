import {
   SET_COMMENTS,
   LIKE_COMMENT,
   UNDO_LIKE_COMMENT,
   UNLIKE_COMMENT,
   UNDO_UNLIKE_COMMENT,
   DO_COMMENT,
   DO_REPLY,
} from '../constants';

const getCurrentTime = () => {
   const date = new Date();
   const day = date.getDay();
   const month = date.getMonth();
   const year = date.getFullYear();
   const hour = date.getHours();
   const minute = date.getMinutes();
   const second = date.getSeconds();

   return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

const initComment = () => ({
   id: Number.parseInt(Math.random() * 1000).toString(),
   body: '',
   time: getCurrentTime(),
   like: 0,
   liked: false,
   unlike: 0,
   unliked: false,
   author: { id: '', username: '', fullname: '', avatar: '' },
});

export default function commentReducers(state = [], actions) {
   switch (actions.type) {
      case SET_COMMENTS:
         return [...actions.payload.comments];
      case LIKE_COMMENT:
         return state.map((comment) => {
            if (!comment.liked && comment.id === actions.payload.id) {
               if (comment.unliked) {
                  comment.unliked = false;
                  comment.unlike -= 1;
               }
               comment.like += 1;
               comment.liked = true;
            }
            return comment;
         });
      case UNDO_LIKE_COMMENT:
         return state.map((comment) => {
            if (comment.id === actions.payload.id) {
               comment.like -= 1;
               comment.liked = false;
            }
            return comment;
         });
      case UNLIKE_COMMENT:
         return state.map((comment) => {
            if (comment.id === actions.payload.id) {
               if (comment.liked) {
                  comment.liked = false;
                  comment.like -= 1;
               }
               comment.unlike += 1;
               comment.unliked = true;
            }
            return comment;
         });
      case UNDO_UNLIKE_COMMENT:
         return state.map((comment) => {
            if (comment.id === actions.payload.id) {
               comment.unlike -= 1;
               comment.unliked = false;
            }
            return comment;
         });
      case DO_COMMENT:
         const comment = { ...initComment(), ...actions.payload.comment };
         return [comment, ...state];
      case DO_REPLY:
         const reply = { ...initComment(), ...actions.payload.reply };
         return [reply, ...state];
      default:
         return state;
   }
}
