import PropTypes from 'prop-types';
import styles from './FormInput.module.scss';
import classNames from 'classnames/bind';
import { memo, useState } from 'react';

const cx = classNames.bind(styles);

function FormInput({ register, label, id, errors, disabled = false, value, ...inputProps }) {
   const [inputValue, setInputValue] = useState(value || '');

   const handleChange = (event) => {
      if (!disabled) {
         setInputValue(event.target.value);
      }
   };

   console.log(register);

   return (
      <div className={cx('wrapper')}>
         <label htmlFor={id} className={cx('label')}>
            {label}
         </label>
         <div className={cx('input-wrapper', errors && 'errors', disabled && 'disabled')}>
            <input
               id={id}
               disabled={disabled}
               value={inputValue}
               onChange={(e) => handleChange(e)}
               {...register}
               {...inputProps}
            />
         </div>
         {errors && <div className={cx('errors')}>{errors.message}</div>}
      </div>
   );
}

export default memo(FormInput);
