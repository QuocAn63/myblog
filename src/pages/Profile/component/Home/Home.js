import styles from './ProfileHome.module.scss';
import classNames from 'classnames/bind';
import Image from '../../../../components/Image';
import { useOutletContext } from 'react-router-dom';
import TabPane from '../TabPane'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import images from '../../../../assets/images'

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
            <div className={cx('row')}>
               <div className={cx('tab-container')}>
                  <TabPane image={images.personalSvg} title="Thông tin của tôi" to="/profile/personal" />
                  <TabPane image={images.personalSvg} title="Thông tin của tôi" to="/profile/personal" />
                  <TabPane image={images.personalSvg} title="Thông tin của tôi" to="/profile/personal" />
                  <TabPane image={images.personalSvg} title="Thông tin của tôi" to="/profile/personal" />
                  <TabPane image={images.personalSvg} title="Thông tin của tôi" to="/profile/personal" />
                  <TabPane image={images.personalSvg} title="Thông tin của tôi" to="/profile/personal" />
                  <TabPane image={images.personalSvg} title="Thông tin của tôi" to="/profile/personal" />
                  <TabPane image={images.personalSvg} title="Thông tin của tôi" to="/profile/personal" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
