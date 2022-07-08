import { forwardRef, memo, useEffect, useImperativeHandle } from 'react';
import styles from './ChangeAvatar.module.scss';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import AvatarPreview from './AvatarPreview/AvatarPreview';

const cx = classNames.bind(styles);

function ChangeAvatar({ show: showProps, onClose }) {
   const [show, setShow] = useState(false);
   const [currentImage, setCurrentImage] = useState('');

   const inputRef = useRef();
   const modalRef = useRef();
   const overlayRef = useRef();
   const avatarPreviewRef = useRef();

   const variants = {
      hidden: { opacity: 0, x: '-50%', y: '-300px' },
      visible: { opacity: 1, x: '-50%', y: '-50%' },
   };

   useEffect(() => {
      setShow(showProps);
   }, [showProps]);

   useEffect(() => {
      return () => URL.revokeObjectURL(currentImage.blob);
   }, [currentImage]);

   useOnClickOutside(modalRef, () => handleClosePopup());

   const handleChangeImage = (event) => {
      let file = event.target.files[0];
      if (file) {
         const fileUrl = URL.createObjectURL(file);
         setCurrentImage({ file, blob: fileUrl });
         avatarPreviewRef.current.handleShowPreview();
      }
      inputRef.current.value = '';
   };

   const clearImage = () => setCurrentImage({});

   const handleClosePopup = () => {
      setShow(false);
      onClose();
   };

   return (
      show && (
         <div className={cx('overlay')}>
            <motion.div
               initial="hidden"
               animate="visible"
               transition={{ ease: 'easeOut', duration: 0.5 }}
               variants={variants}
               className={cx('wrapper')}
            >
               <div className={cx('container')} ref={modalRef}>
                  <p className={cx('title')}>Thay đổi ảnh đại diện</p>
                  <div className={cx('input-area')}>
                     <input type="file" accept="image/*" ref={inputRef} onChange={(e) => handleChangeImage(e)} />
                     <div className={cx('input-overlay')} ref={overlayRef} onClick={() => inputRef.current.click()}>
                        <p>Chọn ảnh đại diện</p>
                     </div>
                     <AvatarPreview ref={avatarPreviewRef} src={currentImage.blob} onClose={clearImage} />
                  </div>
                  <div className={cx('controllers')}>
                     <Button primary disabled={!currentImage.file} className={cx('save-btn')}>
                        Lưu
                     </Button>
                  </div>
                  <Button className={cx('close-btn')} onClick={handleClosePopup}>
                     <FontAwesomeIcon icon={faTimes} />
                  </Button>
               </div>
            </motion.div>
         </div>
      )
   );
}

export default memo(ChangeAvatar);
