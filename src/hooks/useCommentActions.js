import { useContext } from 'react';
import { CommentContext } from '../context';

export const useCommentActions = () => {
   const [state, dispatch] = useContext(CommentContext)

   const setComments = ({ comments }) => {
      dispatch({payload: {comments},type: 'SET_COMMENTS'})
   }

   const performComment = ({ comment }) => {
      dispatch({payload: {comment},type: 'COMMENT'})
   }

   return ({
      Comments: state,
      setComments,
      performComment
   })
}