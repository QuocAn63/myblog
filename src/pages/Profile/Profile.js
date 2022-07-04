import styles from './Profile.module.scss';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import ProfileSidebar from '../../layouts/components/ProfileSidebar';

const cx = classNames.bind(styles);

function Profile() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <ProfileSidebar />
            <div className={cx('main-content')}>
               <Outlet />
            </div>
         </div>
      </div>
   );
}

export default Profile;
