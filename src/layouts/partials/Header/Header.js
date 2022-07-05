import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../../../actions/AuthAction';
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
import Button from '../../../components/Button';
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

function Header({ WideScreen = false, SearchOn = true, ...props }) {
   const [Notifies, setNotifies] = useState([]);
   const [User, setUser] = useState({});
   const [isLogin, setIsLogin] = useState(false);
   const { user, actions } = props;

   useEffect(() => {
      if (!!user.id) {
         setUser(user);
         setIsLogin(true);
         setNotifies(NotifyData);
      } else {
         setUser(null);
         setIsLogin(false);
         setNotifies([]);
      }

      // eslint-disable-next-line
   }, [user.id]);

   const handleLogout = () => {
      actions.logout();
   };

   const AccountActionMenu = (userId) => {
      return [
         {
            title: 'Trang cá nhân',
            icon: faUser,
            path: '/user/' + userId,
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
      ];
   };

   const innerStyle = WideScreen ? cx('inner-wrapper', 'wide') : cx('inner-wrapper');

   return (
      <div className={cx('wrapper')}>
         <div className={innerStyle}>
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
                              {AccountActionMenu(User.id).map((item, index) => (
                                 <AccountMenu title={item.title} to={item.path} icon={item.icon} key={index} />
                              ))}
                              <AccountMenu
                                 title="Đăng xuất"
                                 icon={faArrowRightFromBracket}
                                 horizontal
                                 onClick={handleLogout}
                              />
                           </div>
                        )}
                     >
                        <Image src={User.avatar} alt="useravatar" className={cx('user_avatar')} />
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

function mapStateToProps(state) {
   return {
      user: state.authReducers,
   };
}

function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(AuthActions, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
