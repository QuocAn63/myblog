import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthorTab.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faStar, faPen, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import MetaItem from '../MetaItem';

const cx = classNames.bind(styles);

function AuthorTab({ data }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('author')}>
            <Link to={`/author/${data.AUTHOR.ID}`} className={cx('avatar-link')}>
               <Image src={data.AUTHOR.AVATAR} className={cx('avatar')} />
            </Link>
            <Link to={`/author/${data.AUTHOR.ID}`} className={cx('author-name')}>{data.AUTHOR.FULL_NAME}</Link>
         </div>
         <div className={cx('meta-container')}>
            <MetaItem icon={faStar} value={data.META.RATING} content={`Độ nổi tiếng: ${data.META.RATING}`} />
            <MetaItem icon={faPen} value={data.META.POSTS} content={`Số bài viết: ${data.META.POSTS}`} />
            <MetaItem icon={faUserPlus} value={data.META.FOLLOWING} content={`Người theo dõi: ${data.META.FOLLOWING}`} />
         </div>
      </div>
   );
}

AuthorTab.propTypes = {
   data: PropTypes.object.isRequired,
};

export default AuthorTab;
