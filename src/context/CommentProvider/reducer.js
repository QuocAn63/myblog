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
   let comment = {}

   const getCurrentTime = () => {
      const time = new Date();

      const day = time.getDay()
      const month = time.getMonth()
      const year = time.getFullYear()
      const hour = time.getHours()
      const minute = time.getMinutes()
      const second = time.getSeconds()

      return `${year}-${month}-${day} ${hour}:${minute}:${second}`
   }

   const formatTime = (timePara) => {
      const [date, time] = timePara.split(" ")
      const [year, month, day] = date.split("-")
      const [hour, minute] = time.split(":")

      return `${day} tháng ${month},${year} ${hour}:${minute}`
   }

   switch (action.type) {
      case 'SET_COMMENTS':
         return [...action.payload.comments]
      case 'COMMENT':
         comment = {...initComment, ...action.payload.comment, time: formatTime(getCurrentTime())}
         return [comment, ...state];
      case 'REPLY':
         comment = {...initComment, ...action.payload.comment, time: formatTime(getCurrentTime())}
         state = state.map(commentItem => {
            if(commentItem.id === action.payload.parentId) {
               commentItem.reply.push(comment)
            }
            return commentItem
         })
         return state;
      case 'LIKE':

      default:
         return state;
   }
}