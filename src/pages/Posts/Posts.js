import { useLocation } from 'react-router-dom';
import styles from './Posts.module.scss';
import classNames from 'classnames/bind';

import PostItem from '../../components/PostItem';
import { useEffect, useState } from 'react';
import PostFilter from '../../components/PostFilter';

const cx = classNames.bind(styles);

const PostData = {
   ID: 1,
   TITLE: '[MAY FEST 2022] THÔNG BÁO KẾT QUẢ BẢNG XẾP HẠNG ĐIỂM TƯƠNG TÁC',
   AUTHOR: {
      ID: '1',
      AVATAR: 'https://images.viblo.asia/avatar/3f5b542e-6833-4cd4-82f0-a78081e917c6.jpg',
      FULL_NAME: 'Cao Quoc An',
   },
   PUBLISHED_AT: '2022-06-10 12:03 CH',
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
};

function Posts() {
   const [posts, setPosts] = useState([]);
   const location = useLocation()

   useEffect(() => {
      setTimeout(() => {
         const fakeArray = [];
         for (let i = 0; i <= 20; i++) {
            fakeArray.push(i);
         }
         setPosts(fakeArray);
      }, 2000);
      
   }, [location.pathname]);

   return (
      <div className={cx('wrapper')}>
         <PostFilter />
         <div className={cx('content')}>
            {posts.map((post, index) => (
               <PostItem data={PostData} key={index} />
            ))}
         </div>
      </div>
   );
}

export default Posts;
