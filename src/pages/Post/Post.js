import React, { useEffect, useRef, useState } from 'react';
import styles from './Post.module.scss';
import classNames from 'classnames/bind';
import SideComment from '../../layouts/components/SideComment';
import { faEye, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons';

import UserComment from '../../layouts/components/SideComment/UserComment';
import AuthorTag from '../../components/AuthorTab';
import MetaItem from '../../components/MetaItem';
import Tag from '../../components/Tag';

const cx = classNames.bind(styles);

const AUTHOR_DATA = {
   AUTHOR: {
      ID: '3',
      FULL_NAME: 'CAO QUOC AN',
      AVATAR: '',
   },
   META: {
      RATING: 0,
      POSTS: 0,
      FOLLOWING: 0,
   },
};

const POST_DATA = {
   ID: '1',
   TITLE: '[Rails] Tip xử lý khi import file',
   CONTENT: '<h3>This is some sample content.</h3>',
   TAGS: [
      {
         ID: '1',
         TITLE: 'Javascript',
      },
      {
         ID: '2',
         TITLE: 'HTML5',
      },
      {
         ID: '3',
         TITLE: 'SCSS',
      },
   ],
   META: {
      TIME: '2022-06-23 11:12',
      VIEWS: 0,
      COMMENTS: 0,
      BOOKMARKS: 0,
   },
};

const USER = {
   ID: '1',
   FULL_NAME: 'Cao Quoc An',
   AVATAR: '',
};

const CommentsArray = [{
   comment_id: '1',
   content:
      'nên chỉ dùng có các nhưng page đọc tin kiểu GET dữ liệu về thôi nhỉ b? Còn những page mà như cập nhật thông tin cá nhân thì ko dùng đúng ko bạn?',
   time: '2022-06-03 12:03',
   like: 0,
   unlike: 0,
   liked: false,
   unliked: false,
   author: {
      author_id: '1',
      author_fullName: 'Cao Quoc An',
      avatar: '',
   },
   reply: [
      {
         comment_id: '2',
         content:
            'nên chỉ dùng có các nhưng page đọc tin kiểu GET dữ liệu về thôi nhỉ b? Còn những page mà như cập nhật thông tin cá nhân thì ko dùng đúng ko bạn?',
         time: '2022-06-03 12:03',
         like: 0,
         unlike: 0,
         liked: false,
         unliked: false,
         author: {
            author_id: '1',
            author_fullName: 'Cao Quoc An',
            avatar: '',
         },
      },
      {
         comment_id: '3',
         content:
            'nên chỉ dùng có các nhưng page đọc tin kiểu GET dữ liệu về thôi nhỉ b? Còn những page mà như cập nhật thông tin cá nhân thì ko dùng đúng ko bạn?',
         time: '2022-06-03 12:03',
         like: 0,
         unlike: 0,
         liked: false,
         unliked: false,
         author: {
            author_id: '1',
            author_fullName: 'Cao Quoc An',
            avatar: '',
         },
      },
      {
         comment_id: '4',
         content:
            'nên chỉ dùng có các nhưng page đọc tin kiểu GET dữ liệu về thôi nhỉ b? Còn những page mà như cập nhật thông tin cá nhân thì ko dùng đúng ko bạn?',
         time: '2022-06-03 12:03',
         like: 0,
         unlike: 0,
         liked: false,
         unliked: false,
         author: {
            author_id: '1',
            author_fullName: 'Cao Quoc An',
            avatar: '',
         },
      },
   ],
}]

function Post() {
   const [Loading, setLoading] = useState(false);
   const [Comments, setComments] = useState([])
   const ContentRef = useRef();

   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setComments(CommentsArray)
         ContentRef.current.innerHTML = POST_DATA.CONTENT;
      }, 1000);
      setLoading(false);
   }, []);

   return (
      <div className={cx('wrapper')}>
         {!Loading && (
            <>
               <div className={cx('post-info')}>
                  <div className={cx('author')}>
                     <AuthorTag
                        ID={AUTHOR_DATA.AUTHOR.ID}
                        AVATAR={AUTHOR_DATA.AUTHOR.AVATAR}
                        FULL_NAME={AUTHOR_DATA.AUTHOR.FULL_NAME}
                        POSTS={AUTHOR_DATA.META.POSTS}
                        RATING={AUTHOR_DATA.META.RATING}
                        FOLLOWING={AUTHOR_DATA.META.FOLLOWING}
                     />
                  </div>
                  <div className={cx('meta-container')}>
                     <div className={cx('container')}>
                        <MetaItem value={`Đã đăng vào: ${POST_DATA.META.TIME}`} />
                     </div>
                     <div className={cx('container')}>
                        <MetaItem
                           icon={faEye}
                           value={POST_DATA.META.VIEWS}
                           content={`Lượt xem: ${POST_DATA.META.VIEWS}`}
                        />
                        <MetaItem
                           icon={faComment}
                           value={POST_DATA.META.COMMENTS}
                           content={`Bình luận: ${POST_DATA.META.VIEWS}`}
                        />
                        <MetaItem
                           icon={faBookmark}
                           value={POST_DATA.META.BOOKMARKS}
                           content={`Bookmarks: ${POST_DATA.META.VIEWS}`}
                        />
                     </div>
                  </div>
               </div>
               <div className={cx('content')}>
                  <h1 className={cx('content-title')}>{POST_DATA.TITLE}</h1>
                  <div className={cx('content-area')} ref={ContentRef}></div>
                  <div className={cx('tags')}>
                     {POST_DATA.TAGS.map((tag, index) => (
                        <Tag id={tag.ID} title={tag.TITLE} key={index} />
                     ))}
                  </div>
               </div>
               <div className={cx('comment-side')}>
                  <h3 className={cx('title')}>Bình luận</h3>
                  <div className={cx('comment-wrapper')}>
                     <UserComment user={USER} />
                  </div>
                  {Comments.map((Comment, index) => (
                     <div className={cx('comment-wrapper')} key={index}>
                        <SideComment data={Comment} />
                     </div>
                  ))}
               </div>
            </>
         )}
      </div>
   );
}

export default Post;
