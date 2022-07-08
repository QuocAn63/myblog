import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './FormSelect.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function FormSelect({ register, name, errors, label, options, ...props }) {
    const [show, setShow] = useState(false)
    const handleChange = e => {
        
    }
  
    return (
    <div className={cx('wrapper')}>
        <label htmlFor={name} className={cx('label')}>
           {label}
        </label>
        <div className={cx('input-wrapper', errors && 'errors', props.disabled && 'disabled')}>
            <motion.div className={cx('dropdown')}>
                {}
            </motion.div>
        </div>
            {errors && <div className={cx('errors-show')}>{errors.message}</div>}
        </div>
)
}

export default FormSelect