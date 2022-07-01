import PropTypes from 'prop-types'
import styles from './Comments.module.scss';
import classNames from 'classnames/bind';
import Comment from './Comment';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Comments({ comments: commentsData }) {
   const [comments, setComments] = useState([]);

   const getReplies = (parentId) => {
      return commentsData.filter(comment => comment.parentId === parentId)
   }

   useEffect(() => {
      const parentComment = commentsData.filter(comment => comment.parentId === undefined);
      setComments(parentComment)
   }, [])


   return (
   comments.map((comment, index) => (
         <div className={cx('wrapper')} key={index}>
            <Comment data={comment} />
            <div className={cx('reply-container')}>
               {getReplies(comment.id).map((reply, index) => <Comment data={reply} children key={index} />)}
            </div>
         </div>

   ))
   );
}

Comments.prototype = {
   comments: PropTypes.array.isRequired
}

export default Comments;
