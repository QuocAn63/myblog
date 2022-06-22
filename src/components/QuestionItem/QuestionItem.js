import React from 'react';
import PropTypes from 'prop-types';

import MetaItem from '../MetaItem';
import Image from '../Image';
import Tag from '../Tag';

import styles from './QuestionItem.module.scss';
import classNames from 'classnames/bind';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faCaretUp, faEye, faMessage, faReply } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function QuestionItem({ data }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('meta')}>
            <div className={cx('published_at')}>
               <MetaItem icon={faCalendarDays} value={data.META.TIME} content={data.META.TIME} />
            </div>
            <div className={cx('container')}>
               <MetaItem icon={faReply} value={data.META.REPLIES} content={'Trả lời'} />
               <MetaItem icon={faCaretUp} value={data.META.POINTS} content={'Điểm'} />
               <MetaItem icon={faMessage} value={data.META.COMMENTS} content={'Bình luận'} />
               <MetaItem icon={faEye} value={data.META.VIEWS} content={'Lượt xem'} />
            </div>
         </div>
         <div className={cx('information')}>
            <div className={cx('author')}>
               <Link to={`/user/${data.AUTHOR.ID}`} className={'avatar-link'}>
                  <Image src={data.AUTHOR.AVATAR} className={cx('avatar')} />
               </Link>
               <Link to={`/user/${data.AUTHOR.ID}`} className={cx('author-name')}>
                  {data.AUTHOR.FULL_NAME}
               </Link>
            </div>
            <div className={cx('question')}>
               <Link to={`/question/${data.ID}`} className={cx('title-link')}>{data.TITLE}</Link>
               <div className={cx('tags')}>
                  {data.TAGS.map((tag, index) => (
                     <Tag data={tag} key={index} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

QuestionItem.propTypes = {
   data: PropTypes.object.isRequired,
};

export default QuestionItem;
