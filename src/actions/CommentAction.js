import * as actions from '../constants'

export const setComments = (comments) => {
   return {
      type: actions.SET_COMMENTS,
      payload: {comments}
   }
}

export const likeComment = commentId => {
   return {
      type: actions.LIKE_COMMENT,
      payload: {id: commentId}
   }
}

export const undoLikeComment = commentId => {
   return {
      type: actions.UNDO_LIKE_COMMENT,
      payload: {id: commentId}
   }
}

export const unlikeComment = commentId => {
   return {
      type: actions.UNLIKE_COMMENT,
      payload: {id: commentId}
   }
}

export const undoUnlikeComment = commentId => {
   return {
      type: actions.UNDO_UNLIKE_COMMENT,
      payload: {id: commentId}
   }
}

export const doComment = ({comment}) => {
   return {
      type: actions.DO_COMMENT,
      payload: {comment}
   }
}

export const doReply = ({reply}) => {
   return {
      type: actions.DO_REPLY,
      payload: {reply}
   }
}