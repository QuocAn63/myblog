import PropTypes from 'prop-types';
import styles from './ChangeAvatar.module.scss';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ChangeAvatar() {
   const [show, setShow] = useState(true);
   const inputRef = useRef();

   const variants = {
      hidden: { opacity: 0, x: '-50%', y: '-300px' },
      visible: { opacity: 1, x: '-50%', y: '-50%' },
   };

   return (
      <div className={cx('overlay')}>
         <motion.div
            initial="hidden"
            animate="visible"
            transition={{ ease: 'easeOut', duration: 0.5 }}
            variants={variants}
            className={cx('wrapper')}
         >
            <div className={cx('container')}>
               <p className={cx('title')}>Thay đổi ảnh đại diện</p>
               <div className={cx('input-area')}>
                  <input type="file" ref={inputRef} />
                  <div className={cx('input-overlay')} onClick={() => inputRef.current.click()}>
                     <p>Chọn ảnh đại diện</p>
                  </div>
               </div>
               <div className={cx('controllers')}>
                  <Button primary disabled className={cx('save-btn')}>
                     Lưu
                  </Button>
               </div>
               <Button className={cx('close-btn')}>
                  <FontAwesomeIcon icon={faTimes} />
               </Button>
            </div>
         </motion.div>
      </div>
   );
}

export default ChangeAvatar;
