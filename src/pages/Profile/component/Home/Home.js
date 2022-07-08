import styles from './ProfileHome.module.scss';
import classNames from 'classnames/bind';
import Image from '../../../../components/Image';
import { useOutletContext } from 'react-router-dom';
import TabPane from '../TabPane';
import ChangeAvatar from '../../../../components/ChangeAvatar/ChangeAvatar';
import images from '../../../../assets/images';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
   const { user } = useOutletContext();
   const [show, setShow] = useState(false);

   const showPopup = () => setShow(true);
   const closePopup = () => setShow(false);

   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <div className={cx('row')}>
               <div className={cx('avatar-area')}>
                  <Image src={user.avatar} className={cx('avatar')} onClick={showPopup} />
                  <h3 className={cx('title')}>Chào mừng, {user.fullname}</h3>
                  <p className={cx('sub-title')}>Quản lý thông tin cá nhân và bảo mật</p>
               </div>
            </div>
            <div className={cx('row')}>
               <div className="wide grid">
                  <div className="row">
                     <div className="col c-4">
                        <TabPane image={images.personalSvg} title="Thông tin của tôi" to="/profile/personal" />
                     </div>
                     <div className="col c-4">
                        <TabPane image={images.passwordSvg} title="Quản lý mật khẩu" to="/profile/password" />
                     </div>
                     <div className="col c-4">
                        <TabPane image={images.linkedSvg} title="Thông tin của tôi" to="/profile/linked" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <ChangeAvatar show={show} onClose={closePopup} />
      </div>
   );
}

export default Home;
