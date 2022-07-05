import styles from './AccountHeader.module.scss';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../../../actions/AuthAction';
import Image from '../../../components/Image';
import Button from '../../../components/Button';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function AccountHeader({ ...props }) {
   const { user } = props;
   const navigate = useNavigate();
   useEffect(() => {
      if (!user.id) {
         navigate('/', { replace: true });
      }
   }, [user]);

   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner')}>
            <Link to="/" className={cx('nav-item')}>
               Trang chủ
            </Link>
            <HeadlessTippy
               visible
               placement="top-end"
               offset={[0, 10]}
               interactive
               render={() => (
                  <div className={cx('menu')}>
                     <Button className={cx('action-btn')} leftIcon={faArrowRightFromBracket}>
                        Đăng xuất
                     </Button>
                  </div>
               )}
            >
               <Image src={user.avatar} className={cx('avatar')} />
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
