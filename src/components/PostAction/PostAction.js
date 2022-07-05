import PropTypes from 'prop-types';
import { memo, useRef, useState } from 'react';
import styles from './PostAction.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const ActionButton = ({ icon, content }) => (
   <Tippy content={content}>
      <button className={cx('action-button')}>
         <FontAwesomeIcon icon={icon} />
      </button>
   </Tippy>
);

function PostAction({ author, postPoints = 1, postUrl, onIncrease, onDecrease, liked = true, unliked = false }) {
   const [currentValue, setCurrentValue] = useState({ point: postPoints, liked, unliked });

   const ref = useRef();

   const showAvatar = () => {
      if (window.scrollY > 60) {
         ref.current.classList.add(cx('show'));
      } else {
         ref.current.classList.remove(cx('show'));
      }
   };

   useEffect(() => {
      document.addEventListener('scroll', showAvatar);

      return () => document.removeEventListener('scroll', showAvatar);
   }, []);

   const handleIncrease = () => {
      if (currentValue.point === -1 && currentValue.unliked) {
         setCurrentValue({ point: 1, liked: true, unliked: false });
      } else if (currentValue.liked) {
         setCurrentValue((prev) => ({ point: prev.point - 1, liked: false, unliked: false }));
      } else {
         setCurrentValue((prev) => ({ point: prev.point + 1, liked: true, unliked: false }));
      }
   };

   const handleDecrease = () => {
      if (currentValue.point === 1 && currentValue.liked) {
         setCurrentValue({ point: -1, liked: false, unliked: true });
      } else if (currentValue.unliked) {
         setCurrentValue((prev) => ({ point: prev.point + 1, liked: false, unliked: false }));
      } else {
         setCurrentValue((prev) => ({ point: prev.point - 1, liked: false, unliked: true }));
      }
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')} ref={ref}>
            <Link to={`/user/${author.id}`} className={cx('avatar-link')}>
               <Image src={author.avatar} className={cx('avatar')} />
            </Link>
            <div className={cx('pointing-actions')}>
               <Tippy content="Thích bài viết">
                  <Button
                     className={cx('pointing-btn', currentValue.liked && currentValue.point && 'active')}
                     onClick={handleIncrease}
                  >
                     <FontAwesomeIcon icon={faCaretUp} />
                  </Button>
               </Tippy>
               <span className={cx('value')}>
                  {currentValue.point > 0 ? '+' + currentValue.point : currentValue.point}
               </span>
               <Tippy content="Không thích bài viết">
                  <Button
                     className={cx('pointing-btn', currentValue.unliked && currentValue.point && 'active')}
                     onClick={handleDecrease}
                  >
                     <FontAwesomeIcon icon={faCaretDown} />
                  </Button>
               </Tippy>
            </div>
            <div className={cx('btn-container')}>
               <ActionButton icon={faBookmark} content="Bookmark bài viết này" />
               <ActionButton icon={faFacebookF} content="Chia sẻ liên kết bài viết này trên Facebook" />
               <ActionButton icon={faTwitter} content="Chia sẻ liên kết bài viết này trên Twitter" />
            </div>
         </div>
      </div>
   );
}

PostAction.propTypes = {
   author: PropTypes.object.isRequired,
   postUrl: PropTypes.string,
   onIncrease: PropTypes.func,
   onDecrease: PropTypes.func,
};

export default memo(PostAction);
