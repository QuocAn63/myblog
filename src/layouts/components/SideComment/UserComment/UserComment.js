import styles from './UserComment.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Image from '../../../../components/Image';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import { memo, useState } from 'react';

const cx = classNames.bind(styles);

function UserComment({ user, reply, onCancel }) {
   const [CommentValue, setCommentValue] = useState('');

   const autoGrow = (e) => {
      e.target.style.height = '5px';
      e.target.style.height = e.target.scrollHeight + 'px';
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <Link to={`/users/${user.ID}`} className={cx('avatar-link')}>
               <Image src={user.AVATAR} className={cx('avatar')} />
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
                  <Button primary disabled={!CommentValue}>
                     Reply
                  </Button>
               </>
            ) : (
               <Button primary disabled={!CommentValue}>
                  Bình luận
               </Button>
            )}
         </div>
      </div>
   );
}

UserComment.propTypes = {
   user: PropTypes.object.isRequired,
   reply: PropTypes.bool,
   onCancel: PropTypes.func,
};

export default memo(UserComment);
