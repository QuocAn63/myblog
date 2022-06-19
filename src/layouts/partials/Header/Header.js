import React from 'react';
import { NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Search from '../../components/Search';
import Image from '../../../components/Image';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { faBell, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const NavigationItems = [
   {
      title: 'Trang chủ',
      path: '/',
   },
   {
      title: 'Bài viết',
      path: '/posts',
   },
   {
      title: 'Về chúng tôi',
      path: '/about',
   },
];

const ActionItems = [
   {
      title: 'Thông Báo',
      icon: faBell,
   },
   {
      title: 'Viết Bài',
      icon: faPenToSquare,
   },
];

function Header() {
   const isLogin = true;

   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner-wrapper')}>
            <div className={cx('site-navigation')}>
               {NavigationItems.map((item, index) => (
                  <NavLink
                     key={index}
                     className={(Nav) => cx('navigation-item', { active: Nav.isActive })}
                     to={item.path}
                  >
                     {item.title}
                  </NavLink>
               ))}
            </div>
            <Search />

            <div className={cx('actions')}>
               {isLogin ? (
                  <>
                     {ActionItems.map((item, index) => (
                        <Tippy key={index} content={item.title}>
                           <Button primary>
                              <FontAwesomeIcon icon={item.icon} />
                           </Button>
                        </Tippy>
                     ))}
                     <Image
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/84cb15bc509cfe2084425b7c8478d7cb~c5_100x100.jpeg?x-expires=1655024400&x-signature=9WSxtfM2%2BPrBtVr3g3eusAUxZHY%3D"
                        alt="useravatar"
                        className={cx('user_avatar')}
                     />
                  </>
               ) : (
                  <>
                     <Button primary text>
                        Sign in
                     </Button>
                     <Button outline text>
                        Sign up
                     </Button>
                  </>
               )}
            </div>
         </div>
      </div>
   );
}

export default Header;
