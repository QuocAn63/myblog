import React, { useEffect, useRef, useState } from 'react';
import styles from './Post.module.scss';
import classNames from 'classnames/bind';
import { faEye, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons';
import Comments from '../../layouts/components/Comments';
import AuthorTag from '../../components/AuthorTab';
import MetaItem from '../../components/MetaItem';
import Tag from '../../components/Tag';
import PostAction from '../../components/PostAction';

const cx = classNames.bind(styles);

const AUTHOR_DATA = {
   author: {
      id: '3',
      fullname: 'CAO QUOC AN',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU',
   },
   meta: {
      rating: 0,
      posts: 0,
      following: 0,
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
      TIME: '2022-06-23 11:12:02',
      VIEWS: 0,
      COMMENTS: 0,
      BOOKMARKS: 0,
   },
};

const CommentsArray = [
   {
      id: '1',
      body: 'nên chỉ dùng có các nhưng page đọc tin kiểu GET dữ liệu về thôi nhỉ b? Còn những page mà như cập nhật thông tin cá nhân thì ko dùng đúng ko bạn?',
      time: '2022-06-03 12:04:05',
      like: 0,
      unlike: 0,
      liked: false,
      unliked: false,
      author: {
         id: '1',
         fullname: 'Cao Quoc An',
         avatar:
            'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
      },
   },
   {
      id: '2',
      parentId: '1',
      body: 'nên chỉ dùng có các nhưng page đọc tin kiểu GET dữ liệu về thôi nhỉ b? Còn những page mà như cập nhật thông tin cá nhân thì ko dùng đúng ko bạn?',
      time: '2022-06-03 12:03:10',
      like: 0,
      unlike: 0,
      liked: false,
      unliked: false,
      author: {
         id: '1',
         fullname: 'Cao Quoc An',
         avatar:
            'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
      },
   },
   {
      id: '3',
      parentId: '1',
      body: 'nên chỉ dùng có các nhưng page đọc tin kiểu GET dữ liệu về thôi nhỉ b? Còn những page mà như cập nhật thông tin cá nhân thì ko dùng đúng ko bạn?',
      time: '2022-06-03 12:03:22',
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
      id: '4',
      parentId: '1',
      body: 'nên chỉ dùng có các nhưng page đọc tin kiểu GET dữ liệu về thôi nhỉ b? Còn những page mà như cập nhật thông tin cá nhân thì ko dùng đúng ko bạn?',
      time: '2022-06-03 12:03:51',
      like: 0,
      unlike: 0,
      liked: false,
      unliked: false,
      author: {
         id: '1',
         fullname: 'Cao Quoc An',
         avatar: '',
      },
   },
];

function Post({...props}) {
   // eslint-disable-next-line
   const [Loading, setLoading] = useState(false);
   const ContentRef = useRef();

   console.log(props);

   useEffect(() => {
      ContentRef.current.innerHTML = POST_DATA.CONTENT;
      // eslint-disable-next-line
   }, []);

   return (
      <div className={cx('wrapper')}>
         {!Loading && (
            <>
               <div className={cx('main-content')}>
                  <div className={cx('actions')}>
                     <PostAction author={AUTHOR_DATA.author} />
                  </div>
                  <div>
                     <div className={cx('post-info')}>
                        <div className={cx('author')}>
                           <AuthorTag
                              ID={AUTHOR_DATA.author.id}
                              AVATAR={AUTHOR_DATA.author.avatar}
                              FULL_NAME={AUTHOR_DATA.author.fullname}
                              POSTS={AUTHOR_DATA.meta.posts}
                              RATING={AUTHOR_DATA.meta.rating}
                              FOLLOWING={AUTHOR_DATA.meta.following}
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
                  </div>
               </div>
               <div className={cx('comment-side')}>
                  <h3 className={cx('title')}>Bình luận</h3>
                  <Comments data={CommentsArray} />
               </div>
            </>
         )}
      </div>
   );
}

export default Post;
