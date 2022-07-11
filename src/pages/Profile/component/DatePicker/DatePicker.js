import PropTypes from 'prop-types';
import styles from './DatePicker.module.scss';
import DatePickerModule from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames/bind';
import './CustomeDatePicker.css';
import { forwardRef, memo, useState } from 'react';

function DatePicker({ label, register, name, errors, setValue, ...props }) {
   const [startDate, setStartDate] = useState(null);

   const CustomInput = forwardRef(({ value, onClick, onChange }, ref) => {
      setValue(name, value);
      return (
         <input
            className={cx('datepicker-input')}
            onClick={onClick}
            ref={ref}
            value={value}
            onChange={onChange}
            {...register(name)}
            {...props}
         />
      );
   });

   return (
      <div className={cx('wrapper')}>
         <label htmlFor={name} className={cx('label')}>
            {label}
         </label>
         <div className={cx('input-wrapper', errors && 'errors')}>
            <DatePickerModule
               selected={startDate}
               showYearDropdown
               dateFormatCalendar="MMMM"
               yearDropdownItemNumber={15}
               scrollableYearDropdown
               onChange={(date) => setStartDate(date)}
               customInput={<CustomInput />}
               calendarClassName="calendar"
            />
         </div>
         {errors && <div className={cx('errors-show')}>{errors.message}</div>}
      </div>
   );
}

const cx = classNames.bind(styles);

DatePicker.propTypes = {
   label: PropTypes.string.isRequired,
   register: PropTypes.func.isRequired,
   name: PropTypes.string.isRequired,
   errors: PropTypes.object,
   setValue: PropTypes.func.isRequired,
};

export default memo(DatePicker);
