import * as yup from 'yup';
import { regex } from '../regex';
import { isDate, parse } from 'date-fns';
import config from '../index';

function parseDateString(value, originalValue) {
   return isDate(originalValue) ? originalValue : parse(originalValue, 'MM-dd-yyyy', new Date());
}

function is(currentPassword, userPassword) {
   return currentPassword === userPassword;
}

export const personalSchema = yup
   .object({
      fullname: yup.string().min(5, 'Tên hiển thị phải nhiều hơn 5 ký tự').required('Tên hiển thị không được bỏ trống'),
      dob: yup
         .date()
         .transform(parseDateString)
         .typeError('Ngày sinh không hợp lệ')
         .required('Ngày sinh không được bỏ trống'),
      gender: yup.string().required('Giới tính không được bỏ trống'),
   })
   .required();

export const contactSchema = yup
   .object({
      fullname: yup.string().min(5, 'Thên thật phải nhiều hơn 5 ký tự').required('Tên thật không được bỏ trống'),
      phonenumber: yup
         .string('Số điện thoại không hợp lệ')
         .matches(regex.phonenumber, { message: 'Số điện thoại không hợp lệ' })
         .required('Số điện thoại không được bỏ trống')
         .min(10, 'Số điện thoại phải nhiều hơn 9 số')
         .max(12, 'Số điện thoại phải ít hơn 12 số'),
      address: yup.string().required('Địa chỉ không được bỏ trống'),
   })
   .required();

export const emailSchema = yup
   .object({
      email: yup.string().matches(regex.email, 'Địa chỉ Email không hợp lệ').required('Địa chỉ không được bỏ trống'),
   })
   .required();

export const passwordSchema = yup.object({
   currentPassword: yup.string().required('Mật khẩu hiện tại không được bỏ trống'),
   newPassword: yup
      .string()
      .matches(regex.password, 'Mật khẩu mới không hợp lệ')
      .required('Mật khẩu mới không được bỏ trống'),
   retypeNewPassword: yup
      .string()
      .oneOf([yup.ref('newPassword'), null], 'Nhập lại mật khẩu mới không khớp')
      .required('Mật khẩu mới không được bỏ trống'),
});
