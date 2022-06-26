import { Link } from 'react-router-dom'
import styles from './TagSidebar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function TagSidebar() {
   return <div className={cx('wrapper')}>
      <div className={cx('sidebar-item')}>
         <p className={cx('title')}>Javascript</p>
         <div className={cx('meta-table')}>
            <Link to="/" className={cx('meta-item')}>
               <span className={cx('value')}>0</span>
               <span className={cx('meta-title')}>Bài viết</span>
            </Link>
            <Link to="/" className={cx('meta-item')}>
               <span className={cx('value')}>0</span>
               <span className={cx('meta-title')}>Câu hỏi</span>
            </Link>
            <Link to="/" className={cx('meta-item')}>
               <span className={cx('value')}>0</span>
               <span className={cx('meta-title')}>Người theo dõi</span>
            </Link>
         </div>
      </div>
      <div className={cx('sidebar-item')}>
         <p className={cx('title')}>Tag phổ biến</p>
      </div>
   </div>;
}

export default TagSidebar;
