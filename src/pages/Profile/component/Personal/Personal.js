import { useOutletContext } from 'react-router-dom';
import styles from './Personal.module.scss';
import classNames from 'classnames/bind';
import ChangeAvatar from '../../../../components/ChangeAvatar';
import Image from '../../../../components/Image';
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../../../../components/Button';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const cx = classNames.bind(styles);

function Personal() {
   const [show, setShow] = useState(false);
   const {
      register,
      handleSubmit,
      formState: errors,
   } = useForm({
      mode: 'onBlur',
      validationSchema: Yup.object({
         fullname: Yup.string().min(5, 'Tên hiển thị phải nhiều hơn 5 kí tự').required(),
      }),
   });
   const { user } = useOutletContext();

   const showPopup = () => setShow(true);
   const closePopup = () => setShow(false);

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className={cx('form-group')}>
                  <p className={cx('hero-title')}>Thông tin cá nhân</p>
                  <div className={cx('avatar-area')}>
                     <div className={cx('avatar-selector')} onClick={showPopup}>
                        <Image src={user.avatar} className={cx('avatar')} />
                        <span className={cx('badge')}>Thay đổi</span>
                     </div>
                  </div>
                  <div className={cx('input-container')}>
                     <div className={cx('input-group')}>
                        <FormInput
                           type="text"
                           id="username"
                           name="username"
                           label="Tên tài khoản"
                           value={user.username}
                           errors={errors.username}
                           disabled={true}
                        />
                     </div>
                     <div className={cx('input-group')}>
                        <FormInput
                           type="text"
                           id="fullname"
                           name="fullname"
                           value={user.fullname}
                           errors={errors.fullname}
                           register={register}
                           label="Tên hiển thị"
                        />
                     </div>
                     <div className={cx('input-group')}>
                        <FormInput type="text" label="Ngày sinh" />
                        <FormInput type="text" label="Giới tính" />
                     </div>
                  </div>
                  <div className={cx('controllers')}>
                     <Button outline>Cập nhật</Button>
                  </div>
               </div>
            </form>
         </div>
         <ChangeAvatar show={show} onClose={closePopup} />
      </div>
   );
}

export default Personal;
