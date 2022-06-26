import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PostItem.module.scss';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import Image from '../../components/Image';
import Tag from '../../components/Tag';
import MetaItem from '../../components/MetaItem';

import { faBookmark, faEye, faMessage } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PostItem({ data }) {
   return (
      <div className={cx('wrapper')}>
         <Link to={`/user/${data.AUTHOR.ID}`} className={cx('avatar-link')}>
            <Image src={data.AUTHOR.AVATAR} className={cx('avatar')} />
         </Link>
         <div className={cx('container')}>
            <div className={cx('header')}>
               <Link to={`/user/${data.AUTHOR.ID}`} className={cx('author-link')}>
                  {data.AUTHOR.FULL_NAME}
               </Link>
               <span className={cx('meta')}> {data.PUBLISHED_AT}</span>
            </div>
            <div className={cx('body')}>
               <Link to={`/post/${data.ID}`} className={cx('title-link')}>
                  {data.TITLE}
               </Link>
               <div className={cx('tags')}>
                  {data.TAGS.map((tag) => (
                     <Tag id={tag.ID} key={tag.ID} title={tag.TITLE} />
                  ))}
               </div>
            </div>
            <div className={cx('footer')}>
               <div className={cx('meta')}>
                  <MetaItem icon={faEye} value={0} content={'Lượt xem: 0'} />
                  <MetaItem icon={faBookmark} value={0} content={'Bookmarks: 0'} />
                  <MetaItem icon={faMessage} value={0} content={'Bình luận: 0'} />
               </div>
            </div>
         </div>
      </div>
   );
}

PostItem.propTypes = {
   data: PropTypes.object.isRequired,
};

export default PostItem;
