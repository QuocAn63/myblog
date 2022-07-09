import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './FormSelect.module.scss';
import classNames from 'classnames/bind';
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';

const cx = classNames.bind(styles);

function FormSelect({ register, name, errors, label, options, ...props }) {
   const [show, setShow] = useState(false);
   const [currentValue, setCurrentValue] = useState('');
   const selectRef = useRef();

   useOnClickOutside(selectRef, () => setShow(false));

   useEffect(() => {
      const element = document.querySelector(`input[name='${name}']`);

      if (element) {
         element.value = currentValue.value;
      }
      setShow(false);
   }, [currentValue]);

   const handleChange = (option) => {
      setCurrentValue(option);
   };

   const handleToggle = () => setShow((prev) => !prev);

   const variants = {
      hidden: { opacity: 0, x: '-20px', y: '0px' },
      visible: { opacity: 1, x: '-20px', y: '10px' },
   };

   return (
      <div className={cx('wrapper')}>
         <label htmlFor={name} className={cx('label')}>
            {label}
         </label>
         <div className={cx('input-wrapper', errors && 'errors', props.disabled && 'disabled')}>
            <input ref={selectRef} readOnly onClick={handleToggle} placeholder="Chọn" {...register(name)} />
            {show && (
               <motion.div className={cx('dropdown')} initial="hidden" animate="visible" variants={variants}>
                  <ul>
                     {options.map((option, index) => (
                        <li key={index} className={cx('dropdown-item')} onClick={() => handleChange(option)}>
                           {option.key}
                        </li>
                     ))}
                  </ul>
               </motion.div>
            )}
         </div>
         {errors && <div className={cx('errors-show')}>{errors.message}</div>}
      </div>
   );
}

export default FormSelect;
