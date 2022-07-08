import PropTypes from 'prop-types';
import styles from './FormInput.module.scss';
import classNames from 'classnames/bind';
import { memo, useState } from 'react';

const cx = classNames.bind(styles);

function FormInput({ register, errors, name, disabled = false, label, ...props }) {
   const [inputValue, setInputValue] = useState(props.value || '');

   const handleChange = (event) => {
      if (!disabled) {
         setInputValue(event.target.value);
      }
   };

   return (
      <div className={cx('wrapper')}>
         <label htmlFor={name} className={cx('label')}>
            {label}
         </label>
         <div className={cx('input-wrapper', errors && 'errors', disabled && 'disabled')}>
            <input
               id={name}
               disabled={disabled}
               value={inputValue}
               {...register(name, {
                  onChange: handleChange
               })}
               {...props}
            />
         </div>
         {errors && <div className={cx('errors-show')}>{errors.message}</div>}
      </div>
   );
}

export default memo(FormInput);
