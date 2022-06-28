import images from '../../assets/images'

import styles from './Login.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Login() {
  return (
    <div className={cx('wrapper')} style={{backgroundImage: `url(${images.loginBackground})`}}>
        <div className={cx('container')}>
            
        </div>
    </div>
  )
}

export default Login