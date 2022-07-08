import styles from './AvatarPreview.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function AvatarPreview({ src, onClose, ...props }, ref) {
   const [show, setShow] = useState(false);
   const boxRef = useRef();

   useImperativeHandle(
      ref,
      () => ({
         handleShowPreview: () => setShow(true),
      }),
      [],
   );

   useEffect(() => {
      if (boxRef.current) {
         boxRef.current.style.backgroundImage = `url("${src}")`;
         boxRef.current.style.backgroundSize = 'cover';
         boxRef.current.style.backgroundRepeat = 'no-repeat';
         boxRef.current.style.backgroundPosition = '50%';
      }
   }, [src]);

   const handleClosePreview = () => {
      onClose();
      setShow(false);
   };

   return (
      show && (
         <div className={cx('wrapper')} ref={boxRef}>
            <span className={cx('close-btn')} onClick={handleClosePreview}>
               <FontAwesomeIcon icon={faTimes} className={cx('icon')} />
            </span>
         </div>
      )
   );
}

export default forwardRef(AvatarPreview);
