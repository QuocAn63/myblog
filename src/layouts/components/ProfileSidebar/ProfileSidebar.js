import styles from './ProfileSidebar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function ProfileSidebar() {
  return (
    <div className={cx('wrapper')}></div>
  )
}

export default ProfileSidebar