import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './FormSelect.module.scss';
import classNames from 'classnames/bind';
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function FormSelect({ register, name, errors, label, options, setValue, ...props }) {
   const [show, setShow] = useState(false);
   const [currentValue, setCurrentValue] = useState('');
   const formRef = useRef();

   useOnClickOutside(formRef, () => setShow(false));

   useEffect(() => {
      const element = document.querySelector(`input[name='${name}']`);

      if (element) {
         setValue(name, currentValue.value);
         element.value = currentValue.key || '';
      }
      setShow(false);

      // eslint-disable-next-line
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
      <div className={cx('wrapper')} ref={formRef}>
         <label htmlFor={name} className={cx('label')}>
            {label}
         </label>
         <div className={cx('input-wrapper', errors && 'errors', props.disabled && 'disabled')}>
            <input readOnly onClick={handleToggle} placeholder="Chọn" {...register(name)} />
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

FormSelect.propTypes = {
   register: PropTypes.func.isRequired,
   name: PropTypes.string.isRequired,
   errors: PropTypes.object,
   label: PropTypes.string.isRequired,
   options: PropTypes.array.isRequired,
   setValue: PropTypes.func.isRequired,
};

export default FormSelect;
