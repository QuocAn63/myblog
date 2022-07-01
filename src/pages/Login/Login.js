import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import images from '../../assets/images';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as AuthActions from '../../actions/AuthAction'
import config from '../../config';
import { useForm } from 'react-hook-form';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login({ ...props }) {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const { user, actions } = props
   const ErrorMessage = ({ label, message }) => {
      const MessageArray = message.split('\n');

      return (
         <div className={cx('error-message')}>
            {MessageArray.map((message, index) => (
               <p className={cx('title')} key={index}>
                  {label} {message}
               </p>
            ))}
         </div>
      );
   };
   const navigate = useNavigate();

   useEffect(() => {
      if(!!user.id) {
         navigate('/', {replace: true})
      }
   }, [user])

   const onSubmit = (data) => {
      const userForm = {username: data.username, password: data.password}
      if(!user.id) {
         actions.login(userForm)
      }
   };

   return (
      <div className={cx('wrapper')} style={{ backgroundImage: `url(${images.loginBackground})` }}>
         <div className={cx('container')}>
            <div className={cx('title-area')}>
               <p className={cx('title')}>Đăng nhập</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className={cx('input-group')}>
                  <div className={cx('inner')}>
                     <span className={cx('label')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                     </span>
                     <input
                        type="text"
                        className={cx('input-box', errors.username && 'error')}
                        placeholder="Tên tài khoản"
                        {...register('username', {
                           required: { value: true, message: 'không được bỏ trống' },
                           pattern: {
                              value: config.regex.userName,
                              message: 'phải từ 6 đến 16 ký tự\nchứa các ký tự không hợp lệ',
                           },
                        })}
                     />
                  </div>
                  {errors.username && <ErrorMessage label="Tên tài khoản" message={errors.username.message} />}
               </div>
               <div className={cx('input-group')}>
                  <div className={cx('inner')}>
                     <span className={cx('label')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                     </span>
                     <input
                        type="password"
                        className={cx('input-box', errors.password && 'error')}
                        placeholder="Mật khẩu"
                        {...register('password', {
                           required: { value: true, message: 'không được bỏ trống' },
                           pattern: {
                              value: config.regex.password,
                              message: 'không hợp lệ',
                           },
                        })}
                     />
                  </div>
                  {errors.password && <ErrorMessage label="Mật khẩu" message={errors.password.message} />}
               </div>
               <div className={cx('controllers')}>
                  <button className={cx('submit-button')}>Đăng nhập</button>
                  <div className={cx('sub-controllers')}>
                     <Link to="/forgot-password" className={cx('sub-link')}>
                        Quên mật khẩu
                     </Link>
                     <Link to="/register" className={cx('sub-link')}>
                        Tạo tài khoản
                     </Link>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}

function mapStateToProps(state) {
   return {
      user: state.authReducers
   }
}

function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(AuthActions, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
