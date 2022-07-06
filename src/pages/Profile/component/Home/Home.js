import styles from './ProfileHome.module.scss';
import classNames from 'classnames/bind';
import Image from '../../../../components/Image';
import { useOutletContext } from 'react-router-dom';
const cx = classNames.bind(styles);

function Home() {
   const { user, actions } = useOutletContext();

   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <div className={cx('row')}>
               <div className={cx('avatar-area')}>
                  <Image src={user.avatar} className={cx('avatar')} />
                  <h3 className={cx('title')}>Chào mừng, {user.fullname}</h3>
                  <p className={cx('sub-title')}>Quản lý thông tin cá nhân và bảo mật</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
