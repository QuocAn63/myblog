import styles from './UserComment.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Image from '../../../../components/Image';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import { memo, useState } from 'react';
import { useAuthorization } from '../../../../hooks';
import { useCommentActions } from '../../../../hooks/useCommentActions';

const cx = classNames.bind(styles);

function UserComment({ reply = false, onCancel}) {
   const [CommentValue, setCommentValue] = useState('');
   const { performComment } = useCommentActions()
   const { user } = useAuthorization()
   const autoGrow = (e) => {
      e.target.style.height = '5px';
      e.target.style.height = e.target.scrollHeight + 'px';
   };

   const handleComment = () => {
      const comment = {
         id: Math.random()*100,
         content: CommentValue,
         time: new Date().toTimeString(),
         author: {
            ...user
         }
      }

      performComment({comment})
   }

   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <Link to={`/users/${user.id}`} className={cx('avatar-link')}>
               <Image src={user.avatar} className={cx('avatar')} />
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
                  <Button primary disabled={!CommentValue} onClick={handleComment}>
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
};

export default memo(UserComment);
