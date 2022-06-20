import React from 'react';
import PropTypes from 'prop-types';

import styles from './SidebarItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SidebarItem({ data }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('title')}>{data.TITLE}</div>
         <div className={cx('meta')}>
            <span className={cx('author')}>{data.AUTHOR}</span>
         </div>
      </div>
   );
}

SidebarItem.propTypes = {
   data: PropTypes.object.isRequired,
};

export default SidebarItem;
