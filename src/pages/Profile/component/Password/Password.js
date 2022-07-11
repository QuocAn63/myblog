import styles from '../ProfileLocalStyle/ProfileLocal.module.scss';
import classNames from 'classnames/bind';
import config from '../../../../config';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useOutletContext } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import Button from '../../../../components/Button/Button';

const cx = classNames.bind(styles);

function Password() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(config.yup.passwordSchema) });
   const { user } = useOutletContext();
   const onSubmit = (data) => {
      console.log(data);
   };
   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className={cx('form-group')}>
                  <p className={cx('hero-title')}>Thay đổi mật khẩu</p>
                  <div className={cx('input-container')}>
                     <div className={cx('input-group')}>
                        <FormInput
                           autoComplete="off"
                           type="password"
                           name="currentPassword"
                           placeholder="Mật khẩu hiện tại"
                           label="Mật khẩu hiện tại"
                           errors={errors.currentPassword}
                           register={register}
                        />
                     </div>
                     <div className={cx('input-group')}>
                        <FormInput
                           autoComplete="off"
                           type="password"
                           name="newPassword"
                           placeholder="Mật khẩu mới"
                           label="Mật khẩu mới"
                           errors={errors.newPassword}
                           register={register}
                        />
                     </div>
                     <div className={cx('input-group')}>
                        <FormInput
                           autoComplete="off"
                           type="password"
                           name="retypeNewPassword"
                           placeholder="Nhập lại mật khẩu mới"
                           label="Nhập lại mật khẩu mới"
                           errors={errors.retypeNewPassword}
                           register={register}
                        />
                     </div>
                  </div>
                  <div className={cx('controllers')}>
                     <Button outline>Đổi mật khẩu</Button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Password;
