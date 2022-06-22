import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import AccountMenu from '../../components/AccountMenuItem';
import Search from '../../components/Search';
import Image from '../../../components/Image';
import Notify from '../../components/Notify';

import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import {
   faArrowRightFromBracket,
   faBell,
   faFileLines,
   faGear,
   faPenToSquare,
   faUser,
} from '@fortawesome/free-solid-svg-icons';
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
      title: 'Hỏi đáp',
      path: '/questions',
   },
   {
      title: 'Thảo luận',
      path: '/discussions',
   },
];

const AccountActionItems = [
   {
      title: 'Trang cá nhân',
      icon: faUser,
      path: '/profile',
   },
   {
      title: 'Quản lý nội dung',
      icon: faFileLines,
      path: '/myposts',
   },
   {
      title: 'Tuỳ chỉnh',
      icon: faGear,
      path: '/settings',
   },
   {
      title: 'Đăng xuất',
      icon: faArrowRightFromBracket,
      path: '/logout',
      horizontal: true,
   },
];

const NotifyData = [
   {
      ID: '1',
      TITLE: 'Cao Quoc An đã bình luận bài viết của bạn',
      TIME: '2022-10-2 10:20',
      DESCRIPTION: 'Bài viết tuyệt vời, quá hay, xuất sắc',
   },
   {
      ID: '2',
      TITLE: 'Cao Quoc An đã bình luận bài viết của bạn',
      TIME: '2022-10-2 10:20',
      DESCRIPTION: 'Bài viết tuyệt vời, quá hay, xuất sắc',
   },
   {
      ID: '3',
      TITLE: 'Cao Quoc An đã bình luận bài viết của bạn',
      TIME: '2022-10-2 10:20',
      DESCRIPTION:
         'Bookmark là tính năng được các user sử dụng khi muốn lưu lại một bài viết hay của tác giả khác, thuận tiện cho quá trình tìm đọc lại sau này. Hành động tự Bookmark bài viết của mình không góp phần phản ánh chất lượng của bài viết, và thực chất không mang nhiều giá trị, do tác giả có thể tự xem lại bài viết trong phần Cá nhân => Quản lý nội dung. Ngoài ra, đội ngũ phát triển Viblo sẽ loại bỏ tính năng tự bookmark bài viết của mình trong thời gian tới.',
   },
];

function Header({ SearchOn = true }) {
   const [Notifies, setNotifies] = useState([]);
   
   useEffect(() => {
      setTimeout(() => {
         setNotifies(NotifyData);
      }, 4000);
   }, []);

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

            {SearchOn && <Search />}

            <div className={cx('actions')}>
               {isLogin ? (
                  <>
                     <HeadlessTippy
                        interactive
                        trigger="click"
                        appendTo={document.body}
                        placement="top-end"
                        render={() => (
                           <div className={cx('notify')}>
                              <div className={cx('title')}>Thông báo</div>
                              <div className={cx('notify-container')}>
                                 {Notifies.length === 0 ? (
                                    <div className={cx('empty')}>Không có thông báo</div>
                                 ) : (
                                    Notifies.map((notify, index) => <Notify data={notify} key={index} />)
                                 )}
                              </div>
                              <button className={cx('notify-btn')}>Xem tất cả</button>
                           </div>
                        )}
                     >
                        <Button primary className={cx('action-btn')}>
                           <FontAwesomeIcon icon={faBell} />
                        </Button>
                     </HeadlessTippy>
                     <Tippy content="Viết bài">
                        <Button primary to="/publish/post" className={cx('action-btn')}>
                           <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>
                     </Tippy>
                     <HeadlessTippy
                        trigger="click"
                        interactive
                        placement="top-end"
                        render={() => (
                           <div className={cx('menu')}>
                              {AccountActionItems.map((item, index) => (
                                 <AccountMenu data={item} key={index} />
                              ))}
                           </div>
                        )}
                     >
                        <Image
                           src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/84cb15bc509cfe2084425b7c8478d7cb~c5_100x100.jpeg?x-expires=1655024400&x-signature=9WSxtfM2%2BPrBtVr3g3eusAUxZHY%3D"
                           alt="useravatar"
                           className={cx('user_avatar')}
                        />
                     </HeadlessTippy>
                  </>
               ) : (
                  <>
                     <Button primary text to="/login">
                        Log in
                     </Button>
                     <Button outline text to="/register">
                        Register
                     </Button>
                  </>
               )}
            </div>
         </div>
      </div>
   );
}

export default Header;
