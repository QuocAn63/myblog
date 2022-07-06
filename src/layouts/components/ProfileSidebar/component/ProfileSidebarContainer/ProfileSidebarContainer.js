import styles from './ProfileSidebarContainer.module.scss';
import classNames from 'classnames/bind';
import ProfileSidebarItem from '../ProfileSidebarItem';
import PropTypes from 'prop-types';
import { useState } from 'react';
const cx = classNames.bind(styles);

function ProfileSidebarContainer({ SidebarItem }) {
   const [show, setShow] = useState(true);

   const handleToggle = () => {
      setShow((prev) => !prev);
   };

   return (
      <div className={cx('wrapper')}>
         {SidebarItem.children ? (
            <>
               <div className={cx('head')}>
                  <ProfileSidebarItem
                     icon={SidebarItem.icon}
                     title={SidebarItem.title}
                     head
                     show={show}
                     onClick={handleToggle}
                  />
               </div>
               <ul className={cx('menu-list', show && 'show')}>
                  {SidebarItem.children.map((item, index) => (
                     <li key={index}>
                        <ProfileSidebarItem title={item.title} end={item.end} children icon={item.icon} to={item.to} />
                     </li>
                  ))}
               </ul>
            </>
         ) : (
            <ProfileSidebarItem
               title={SidebarItem.title}
               end={SidebarItem.end}
               icon={SidebarItem.icon}
               to={SidebarItem.to}
            />
         )}
      </div>
   );
}

ProfileSidebarContainer.propTypes = {
   SidebarItem: PropTypes.object.isRequired,
};

export default ProfileSidebarContainer;
