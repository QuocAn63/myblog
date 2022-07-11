import styles from '../ProfileLocalStyle/ProfileLocal.module.scss';
import classNames from 'classnames/bind';
import FormInput from '../FormInput/FormInput';
import Button from '../../../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useOutletContext } from 'react-router-dom';
import config from '../../../../config';

const cx = classNames.bind(styles);

function Contact() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(config.yup.contactSchema) });
   const { user } = useOutletContext();
   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className={cx('form-group')}>
                  <p className={cx('hero-title')}>Thông tin liên hệ</p>
                  <div className={cx('input-container')}>
                     <div className={cx('input-group')}>
                        <FormInput
                           autoComplete="off"
                           type="text"
                           name="fullname"
                           label="Tên thật"
                           value={user.fullname}
                           errors={errors.fullname}
                           register={register}
                        />
                        <FormInput
                           autoComplete="off"
                           type="text"
                           name="phonenumber"
                           value={user.phonenumber}
                           errors={errors.phonenumber}
                           register={register}
                           label="Số điện thoại"
                        />
                     </div>
                     <div className={cx('input-group')}>
                        <FormInput
                           autoComplete="off"
                           type="text"
                           name="address"
                           label="Địa chỉ"
                           value={user.address}
                           errors={errors.address}
                           register={register}
                        />
                     </div>
                  </div>
                  <div className={cx('controllers')}>
                     <Button outline>Cập nhật</Button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Contact;
