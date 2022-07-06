import styles from './AccountHeader.module.scss';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../../../actions/AuthAction';
import Image from '../../../components/Image';
import { faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import AccountMenuItem from '../../components/AccountMenuItem';

const cx = classNames.bind(styles);

function AccountHeader({ ...props }) {
   const { user, actions } = props;
   const navigate = useNavigate();
   useEffect(() => {
      if (!user.id) {
         navigate('/', { replace: true });
      }

      // eslint-disable-next-line
   }, [user]);

   const handleLogout = () => {
      actions.logout();
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner')}>
            <Link to="/" className={cx('nav-item')}>
               Trang chủ
            </Link>
            <HeadlessTippy
               placement="top-end"
               offset={[0, 10]}
               interactive
               trigger="click"
               render={() => (
                  <div className={cx('menu')}>
                     <AccountMenuItem icon={faUser} title="Trang cá nhân" to={`/user/${user.id}`} />
                     <AccountMenuItem
                        icon={faArrowRightFromBracket}
                        title="Đăng xuất"
                        onClick={handleLogout}
                        horizontal
                     />
                  </div>
               )}
            >
               <div className={cx('account-side-menu')}>
                  <div className={cx('avatar-wrapper')}>
                     <Image src={user.avatar || ''} className={cx('avatar')} />
                  </div>
               </div>
            </HeadlessTippy>
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountHeader);
