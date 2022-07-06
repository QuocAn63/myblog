import styles from './ProfileSidebar.module.scss';
import classNames from 'classnames/bind';
import ProfileSidebarContainer from './component/ProfileSidebarContainer';

const cx = classNames.bind(styles);

function ProfileSidebar({ items }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            {items.map((item, index) => (
               <ProfileSidebarContainer key={index} SidebarItem={item} />
            ))}
         </div>
      </div>
   );
}

export default ProfileSidebar;
