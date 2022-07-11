import styles from '../ProfileLocalStyle/ProfileLocal.module.scss';
import classNames from 'classnames/bind';
import config from '../../../../config';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useOutletContext } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import Button from '../../../../components/Button/Button';

const cx = classNames.bind(styles);

function Email() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(config.yup.emailSchema) });
   const { user } = useOutletContext();
   const onSubmit = (data) => {
      console.log(data);
   };
   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className={cx('form-group')}>
                  <p className={cx('hero-title')}>Địa chỉ Email</p>
                  <div className={cx('input-container')}>
                     <div className={cx('input-group')}>
                        <FormInput
                           autoComplete="off"
                           type="mail"
                           name="email"
                           placeholder="Nhập địa chỉ Email mới"
                           label="Địa chỉ email mới"
                           errors={errors.email}
                           register={register}
                        />
                     </div>
                  </div>
                  <div className={cx('controllers')}>
                     <Button outline>Thêm</Button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Email;
