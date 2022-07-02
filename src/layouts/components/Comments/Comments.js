import PropTypes from 'prop-types'
import styles from './Comments.module.scss';
import classNames from 'classnames/bind';
import Comment from './Comment';
import { useEffect, useState } from 'react';
import * as CommentActions from '../../../actions/CommentAction'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import UserComment from './UserComment';

const cx = classNames.bind(styles);

function Comments({ data, ...props }) {
   const {comments, actions} = props
   const {setComments, likeComment, undoLikeComment, unlikeComment, undoUnlikeComment, doComment, doReply} = actions

   const passProps = {
      likeComment, undoLikeComment, unlikeComment, undoUnlikeComment, doReply
   }

   const getReplies = (parentId) => {
      return comments
         .filter(comment => comment.parentId === parentId)
         .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
   }

   const getParentComments = () => {
      return comments
               .filter(comment => comment.parentId === undefined)
               .sort((a, b) => new Date(a.time).getTime - new Date(b.time).getTime)
   }

   useEffect(() => {
      setComments(data)
   }, [])

   return (
      <>
         <div className={cx('user-comment')}>
            <UserComment doComment={doComment} />
         </div>
         {getParentComments().map((comment, index) => (
               <div className={cx('wrapper')} key={index}>
                  <Comment data={comment} {...passProps} />
                  <div className={cx('reply-container')}>
                     {getReplies(comment.id).map((reply, index) => <Comment data={reply} children key={index} {...passProps} />)}
                  </div>
               </div>
         ))}
      </>
   );
}

function mapStateToProps(state) {
   return {
      comments: state.commentReducers
   }
}

function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(CommentActions, dispatch)
   }
}

Comments.prototype = {
   data: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
