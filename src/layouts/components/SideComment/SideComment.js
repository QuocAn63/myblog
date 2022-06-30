import PropTypes from 'prop-types'
import styles from './SideComment.module.scss';
import classNames from 'classnames/bind';
import Comment from './Comment';

const cx = classNames.bind(styles);



function SideComment({ data }) {
   return (
      <div className={cx('wrapper')}>
         <Comment data={data} />
         <div className={cx('reply-container')}>
            {data.reply && data.reply.map((comment, index) => (
               <Comment data={comment} children key={index} />
            ))}
         </div>
      </div>
   );
}

SideComment.prototype = {
   data: PropTypes.object.isRequired
}

export default SideComment;
