import React from 'react';
import PropTypes from 'prop-types';

import styles from './SidebarItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import MetaItem from '../../../../components/MetaItem'
import { faAngleUp, faComment, faEye, faReply } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);

function SidebarItem({ data }) {
   return (
      <div className={cx('wrapper')}>
         <Link to={`/post/${data.ID}`} className={cx('title')} title={data.TITLE}>{data.TITLE}</Link>
         <div className={cx('meta')}>
            <div className={cx('container')}>
               <MetaItem icon={faAngleUp} value={data.META.LIKE} content={'Điểm'} />
               <MetaItem icon={faReply} value={data.META.REPLY} content={`Trả lời: ${data.META.REPLY}`} />
               <MetaItem icon={faEye} value={data.META.VIEW} content={`Lượt xem: ${data.META.VIEW}`} />
               <MetaItem icon={faComment} value={data.META.COMMENT} content={`Bình luận: ${data.META.COMMENT}`} />
            </div>
            <Link to={`/user/${data.AUTHOR.ID}`} className={cx('author')}>{data.AUTHOR.FULL_NAME}</Link>
         </div>
      </div>
   );
}

SidebarItem.propTypes = {
   data: PropTypes.object.isRequired,
};

export default SidebarItem;
