import images from '../../assets/images'
import { useForm } from 'react-hook-form'
import styles from './Register.module.scss'
import classNames from 'classnames/bind'
import config from '../../config'

function Register() {
   const { register, handleSubmit, formState: { errors } } = useForm()

   const ErrorMessage = ({ label, message }) => {
      const MessageArray = message.split('\n');

      return (
         <div className={cx('error-message')}>
            {MessageArray.map(message => (
               <p className={cx('title')}>{label} {message}</p>
            ))}
         </div>
      )
   }

   const onSubmit = () => {

   }

   return (
      <div className={cx('wrapper')} style={{backgroundImage: `url(${images.loginBackground})`}}>
         <div className={cx('container')}>
            <div className={cx('title-area')}>
               <p className={cx('title')}>Đăng ký</p>
            </div>
            <form className={cx('register-form')} onSubmit={handleSubmit(onSubmit)}>
               <div className={cx('input-group')}>
                  <input type='text' className={cx('input-box')} placeholder='Họ và tên' {...register("user_fullName", {required: { value: true, message: "không được bỏ trống"}, pattern: {value: config.regex.fullName, message: 'không hợp lệ'}})} />
                  {errors.user_fullName && <ErrorMessage label='Họ và tên' message={errors.user_fullName.message} />}
               </div>
               <div className={cx('input-group')}>
                  <input type='text' className={cx('input-box')} placeholder='Địa chỉ email' {...register("email", {required: { value: true, message: "không được bỏ trống"}, pattern: {value: config.regex.email, message: 'không hợp lệ'}})} />
                  {errors.email && <ErrorMessage label='Địa chỉ email' message={errors.email.message} />}
               </div>
               <div className={cx('input-group')}>
                  <input type='text' className={cx('input-box')} placeholder='Tên tài khoản' {...register("user_name", {required: { value: true, message: "không được bỏ trống"}, pattern: {value: config.regex.userName, message: 'phải từ 6 đến 16 ký tự\nchứa các ký tự không hợp lệ'}})}/>
                  {errors.user_name && <ErrorMessage label='Tên tài khoản' message={errors.user_name.message} />}
               </div>
               <div className={cx('input-group')}>
                  <input type='text' className={cx('input-box')} placeholder='Mật khẩu' />
               </div>
               <div className={cx('input-group')}>
                  <input type='password' className={cx('input-box')} placeholder='Xác nhận mật khẩu' />
               </div>
               <div className={cx('controllers')}>
                  <button className={cx('submit-button')}>Đăng ký</button>
               </div>
            </form>
         </div>
      </div>
   )
}

const cx = classNames.bind(styles)

export default Register