import { useOutletContext } from 'react-router-dom';
import styles from './Personal.module.scss';
import classNames from 'classnames/bind';
import ChangeAvatar from '../../../../components/ChangeAvatar';
import Image from '../../../../components/Image';
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../../../../components/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormSelect from '../FormSelect/FormSelect';

import config from '../../../../config';

const cx = classNames.bind(styles);

function Personal() {
   const [show, setShow] = useState(false);
   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(config.yup.personalSchema),
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
                           autoComplete="off"
                           type="text"
                           name="username"
                           label="Tên tài khoản"
                           value={user.username}
                           errors={errors.username}
                           disabled
                           register={register}
                        />
                     </div>
                     <div className={cx('input-group')}>
                        <FormInput
                           autoComplete="off"
                           type="text"
                           name="fullname"
                           value={user.fullname}
                           errors={errors.fullname}
                           register={register}
                           label="Tên hiển thị"
                        />
                     </div>
                     <div className={cx('input-group')}>
                        <FormInput
                           autoComplete="off"
                           type="text"
                           name="dob"
                           value={user.dob}
                           errors={errors.dob}
                           register={register}
                           label="Ngày sinh"
                           placeholder="Ngày sinh (MM/DD/YYYY)"
                        />
                        <FormSelect
                           autoComplete="off"
                           type="text"
                           readOnly
                           register={register}
                           errors={errors.gender}
                           name="gender"
                           label="Giới tính"
                           setValue={setValue}
                           options={[
                              { key: 'Nam', value: '0' },
                              { key: 'Nữ', value: '1' },
                           ]}
                        />
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
