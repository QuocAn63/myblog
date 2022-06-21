import React from 'react';
import PropTypes from 'prop-types';

import styles from './SidebarItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SidebarItem({ data }) {
   return (
      <Link to="/" className={cx('wrapper')} title={data.TITLE}>
         <div className={cx('title')}>{data.TITLE}</div>
         <div className={cx('meta')}>
            <span className={cx('author')}>{data.AUTHOR}</span>
         </div>
      </Link>
   );
}

SidebarItem.propTypes = {
   data: PropTypes.object.isRequired,
};

export default SidebarItem;
