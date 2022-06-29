import images from '../../assets/images'

import styles from './Login.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function Login() {
  return (
    <div className={cx('wrapper')} style={{backgroundImage: `url(${images.loginBackground})`}}>
        <div className={cx('container')}>
            <div className={cx('title-area')}>
               <p className={cx('title')}>Đăng nhập</p>
            </div>
           <div className={cx('input-group')}>
              <span className={cx('label')}>
                 <FontAwesomeIcon className={cx('icon')} icon={faUser} />
              </span>
              <input type='text' className={cx('input-box')} placeholder='Tên người dùng hoặc email' />
           </div>
           <div className={cx('input-group')}>
              <span className={cx('label')}>
                 <FontAwesomeIcon className={cx('icon')} icon={faLock} />
              </span>
              <input type='password' className={cx('input-box')} placeholder='Mật khẩu' />
           </div>
           <div className={cx('controllers')}>
              <button type='button' className={cx('submit-button')}>Đăng nhập</button>
              <div className={cx('sub-controllers')}>
                 <Link to='/forgot-password' className={cx('sub-link')}>Quên mật khẩu</Link>
                 <Link to='/register' className={cx('sub-link')}>Tạo tài khoản</Link>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Login