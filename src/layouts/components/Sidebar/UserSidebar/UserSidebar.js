import styles from './UserSidebar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const UserMeta = {
   Views: 0,
   FollowingTags: 0,
   Followers: 0,
   Posts: 0,
   Bookmarks: 0,
   Questions: 0,
   Answers: 0,
};

function UserSidebar() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <Link to={`/user/1`} className={cx('item-link')}>
               <span className={cx('title')}>Tổng lượt xem</span>
               <span className={cx('value')}>{UserMeta.Views}</span>
            </Link>
            <Link to={`/user/1/tags`} className={cx('item-link')}>
               <span className={cx('title')}>Các thẻ theo dõi</span>
               <span className={cx('value')}>{UserMeta.FollowingTags}</span>
            </Link>
            <Link to={`/user/1/followers`} className={cx('item-link')}>
               <span className={cx('title')}>Người theo dõi</span>
               <span className={cx('value')}>{UserMeta.Followers}</span>
            </Link>
            <Link to={`/user/1/posts`} className={cx('item-link')}>
               <span className={cx('title')}>Tổng bài viết</span>
               <span className={cx('value')}>{UserMeta.Posts}</span>
            </Link>
            <Link to={`/user/1/bookmarks`} className={cx('item-link')}>
               <span className={cx('title')}>Bookmarks</span>
               <span className={cx('value')}>{UserMeta.Bookmarks}</span>
            </Link>
            <Link to={`/user/1/questions`} className={cx('item-link')}>
               <span className={cx('title')}>Tổng câu hỏi</span>
               <span className={cx('value')}>{UserMeta.Questions}</span>
            </Link>
            <Link to={`/user/1/answers`} className={cx('item-link')}>
               <span className={cx('title')}>Tổng câu trả lời</span>
               <span className={cx('value')}>{UserMeta.Answers}</span>
            </Link>
         </div>
      </div>
   );
}

export default UserSidebar;
