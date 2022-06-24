import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '../../../../components/Image';
import UserComment from '../UserComment';

import styles from './Comment.module.scss';
import classNames from 'classnames/bind';
import MetaItem from '../../../../components/MetaItem';
import { faAngleDown, faAngleUp, faFlag } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useState } from 'react';

const cx = classNames.bind(styles);

const USER = {
   ID: '1',
   FULL_NAME: 'Cao Quoc An',
   AVATAR: '',
};

function Comment({ data, children }) {
   const [isReplying, setIsReplying] = useState(false);

   const handleReply = useCallback(() => setIsReplying(true), []);
   const handleCancelReply = useCallback(() => setIsReplying(false), []);

   return (
      <div className={cx('wrapper', { children })}>
         <div className={cx('author')}>
            <Link to={`/author/${data.AUTHOR.ID}`} className={cx('avatar-link')}>
               <Image src={data.AUTHOR.AVATAR} className={cx('avatar')} />
            </Link>
            <div className={cx('author-info')}>
               <Link to={`/author/${data.AUTHOR.ID}`} className={cx('author-name')}>
                  {data.AUTHOR.FULL_NAME}
               </Link>
               <div className={cx('published_at')}>{data.TIME}</div>
            </div>
         </div>
         <div className={cx('content')}>{data.CONTENT}</div>
         <div className={cx('actions')}>
            <MetaItem icon={faAngleUp} value={data.LIKE} content="Thích" />
            <MetaItem icon={faAngleDown} value={data.UNLIKE} content="Không thích" />
            <div className={cx('horizontal')}></div>
            <MetaItem value={'Trả lời'} content="Trả lời" className={cx('button')} onClick={handleReply} />
            <MetaItem value={'Chia sẻ'} content="Chia sẻ đường dẫn của bình luận này" />
            <MetaItem icon={faFlag} value={'Báo cáo'} content="Báo cáo bình luận này" />
         </div>
         {isReplying && (
            <div className={cx('user-reply-area')}>
               <UserComment user={USER} reply onCancel={handleCancelReply} />
            </div>
         )}
      </div>
   );
}

Comment.propTypes = {
   data: PropTypes.object.isRequired,
};

export default Comment;
