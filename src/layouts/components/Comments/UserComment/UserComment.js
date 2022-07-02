import styles from './UserComment.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Image from '../../../../components/Image';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import { useState } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux';
import * as authActions from '../../../../actions/AuthAction'

const cx = classNames.bind(styles);

function UserComment({ reply = false, parentId = null, onCancel, doComment, doReply, setIsReplying = false, ...props}) {
   const [CommentValue, setCommentValue] = useState('');
   const { user } = props
   const autoGrow = (e) => {
      e.target.style.height = '5px';
      e.target.style.height = e.target.scrollHeight + 'px';
   };

   const handleClear = () => {
      setCommentValue('')
      setIsReplying&&setIsReplying(false)
   }

   const handleComment = () => {
      const comment = {body: CommentValue, author: {...user}}
      doComment({ comment })
      handleClear()
   }

   const handleReply = () => {
      const reply = {body: CommentValue, parentId, author: {...user}}
      doReply({ reply })
      handleClear()
   }

   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <Link to={`/users/`} className={cx('avatar-link')}>
               <Image src="" className={cx('avatar')} />
            </Link>
            <div className={cx('comment-container')}>
               <textarea
                  className={cx('comment-area')}
                  value={CommentValue}
                  onChange={(e) => setCommentValue(e.target.value)}
                  placeholder="Viết bình luận..."
                  onInput={(e) => autoGrow(e)}
               ></textarea>
            </div>
         </div>
         <div className={cx('actions')}>
            {reply ? (
               <>
                  <Button text onClick={onCancel}>
                     Huỷ
                  </Button>
                  <Button primary disabled={!CommentValue} onClick={handleReply}>
                     Reply
                  </Button>
               </>
            ) : (
               <Button primary disabled={!CommentValue} onClick={handleComment}>
                  Bình luận
               </Button>
            )}
         </div>
      </div>
   );
}

UserComment.propTypes = {
   onCancel: PropTypes.func,
   doComment: PropTypes.func,
   doReply: PropTypes.func
};

function mapStateToProps(state) {
   return {
      user: state.authReducers
   }
}

function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(authActions, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComment);
