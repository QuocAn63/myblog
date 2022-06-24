import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthorTab.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faStar, faPen, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import MetaItem from '../MetaItem';

const cx = classNames.bind(styles);

function AuthorTab({ ID, AVATAR, FULL_NAME, RATING, POSTS, FOLLOWING }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('author')}>
            <Link to={`/user/${ID}`} className={cx('avatar-link')}>
               <Image src={AVATAR} className={cx('avatar')} />
            </Link>
            <Link to={`/user/${ID}`} className={cx('author-name')}>
               {FULL_NAME}
            </Link>
         </div>
         <div className={cx('meta-container')}>
            <MetaItem icon={faStar} value={RATING} content={`Độ nổi tiếng: ${RATING}`} />
            <MetaItem icon={faPen} value={POSTS} content={`Số bài viết: ${POSTS}`} />
            <MetaItem icon={faUserPlus} value={FOLLOWING} content={`Người theo dõi: ${FOLLOWING}`} />
         </div>
      </div>
   );
}

AuthorTab.propTypes = {
   ID: PropTypes.string,
   AVATAR: PropTypes.string,
   FULL_NAME: PropTypes.string,
   RATING: PropTypes.number,
   POSTS: PropTypes.number,
   FOLLOWING: PropTypes.number,
};

export default AuthorTab;
