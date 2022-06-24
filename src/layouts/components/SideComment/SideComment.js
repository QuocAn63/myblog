import styles from './SideComment.module.scss';
import classNames from 'classnames/bind';
import Comment from './Comment';

const cx = classNames.bind(styles);

const Comment1 = {
   ID: '1',
   CONTENT:
      'nên chỉ dùng có các nhưng page đọc tin kiểu GET dữ liệu về thôi nhỉ b? Còn những page mà như cập nhật thông tin cá nhân thì ko dùng đúng ko bạn?',
   TIME: '2022-06-03 12:03',
   LIKE: 0,
   UNLIKE: 0,
   AUTHOR: {
      ID: '1',
      FULL_NAME: 'Cao Quoc An',
      AVATAR: '',
   },
   REPLY: [
      {
         ID: '2',
         CONTENT:
            'nên chỉ dùng có các nhưng page đọc tin kiểu GET dữ liệu về thôi nhỉ b? Còn những page mà như cập nhật thông tin cá nhân thì ko dùng đúng ko bạn?',
         TIME: '2022-06-03 12:03',
         LIKE: 0,
         UNLIKE: 0,
         AUTHOR: {
            ID: '1',
            FULL_NAME: 'Cao Quoc An',
            AVATAR: '',
         },
      },
      {
         ID: '1',
         CONTENT:
            'nên chỉ dùng có các nhưng page đọc tin kiểu GET dữ liệu về thôi nhỉ b? Còn những page mà như cập nhật thông tin cá nhân thì ko dùng đúng ko bạn?',
         TIME: '2022-06-03 12:03',
         LIKE: 0,
         UNLIKE: 0,
         AUTHOR: {
            ID: '1',
            FULL_NAME: 'Cao Quoc An',
            AVATAR: '',
         },
      },
      {
         ID: '2',
         CONTENT:
            'nên chỉ dùng có các nhưng page đọc tin kiểu GET dữ liệu về thôi nhỉ b? Còn những page mà như cập nhật thông tin cá nhân thì ko dùng đúng ko bạn?',
         TIME: '2022-06-03 12:03',
         LIKE: 0,
         UNLIKE: 0,
         AUTHOR: {
            ID: '1',
            FULL_NAME: 'Cao Quoc An',
            AVATAR: '',
         },
      },
   ],
};

function SideComment() {
   return (
      <div className={cx('wrapper')}>
         <Comment data={Comment1} />
         <div className={cx('reply-container')}>
            {Comment1.REPLY.map((comment, index) => (
               <Comment data={comment} children key={index} />
            ))}
         </div>
      </div>
   );
}

export default SideComment;
