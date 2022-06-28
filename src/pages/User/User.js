import React from 'react';

import styles from './User.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '../../components/Image';
import MetaItem from '../../components/MetaItem';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import PostItem from '../../components/PostItem';
import { UserSidebar } from '../../layouts/components/Sidebar';
import CustomFilter from '../../components/Filter/CustomFilter';

const cx = classNames.bind(styles);

const UserData = { ID: '1', FULL_NAME: 'Cao Quoc An', AVATAR: '' };
const Posts = [
   {
      ID: '1',
      TITLE: 'UI UX là gì? UI, UX design là gì?',
      PUBLISHED_AT: '2022-07-21 12-05',
      AUTHOR: { ID: '1', FULL_NAME: 'Cao Quoc An', AVATAR: '' },
      META: {
         VIEWS: 0,
         BOOKMARKS: 0,
         COMMENTS: 0,
         LIKE: 0,
      },
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
   },
   {
      ID: '1',
      TITLE: 'UI UX là gì? UI, UX design là gì?',
      PUBLISHED_AT: '2022-07-21 12-05',
      AUTHOR: { ID: '1', FULL_NAME: 'Cao Quoc An', AVATAR: '' },
      META: {
         VIEWS: 0,
         BOOKMARKS: 0,
         COMMENTS: 0,
         LIKE: 0,
      },
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
   },
   {
      ID: '1',
      TITLE: 'UI UX là gì? UI, UX design là gì?',
      PUBLISHED_AT: '2022-07-21 12-05',
      AUTHOR: { ID: '1', FULL_NAME: 'Cao Quoc An', AVATAR: '' },
      META: {
         VIEWS: 0,
         BOOKMARKS: 0,
         COMMENTS: 0,
         LIKE: 0,
      },
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
   },
   {
      ID: '1',
      TITLE: 'UI UX là gì? UI, UX design là gì?',
      PUBLISHED_AT: '2022-07-21 12-05',
      AUTHOR: { ID: '1', FULL_NAME: 'Cao Quoc An', AVATAR: '' },
      META: {
         VIEWS: 0,
         BOOKMARKS: 0,
         COMMENTS: 0,
         LIKE: 0,
      },
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
   },
];

const FilterItems = [
   { title: 'Bài viết', path: 'posts' },
   { title: 'Series', path: 'series' },
   { title: 'Câu hỏi', path: 'questions' },
   { title: 'Câu trả lời', path: 'answers' },
   { title: 'Bookmarks', path: 'bookmarks' },
   { title: 'Người theo dõi', path: 'followers' },
   { title: 'Thẻ', path: 'tags' },
];

const User = function User() {

   return (
      <div className={cx('wrapper')}>
         <div className={cx('user')}>
            <Link to={`/user/${UserData.ID}`} className={cx('avatar-link')}>
               <Image src={UserData.AVATAR} className={cx('avatar')} />
            </Link>
            <div className={cx('user-info')}>
               <Link to={`/user/${UserData.ID}`} className={cx('user-full-name')}>
                  {UserData.FULL_NAME}
               </Link>
               <div className={cx('actions')}>
                  <MetaItem
                     icon={faFlag}
                     value="Báo cáo"
                     content="Báo cáo người dùng này"
                     className={cx('report-btn')}
                  />
               </div>
            </div>
         </div>
         <div className={cx('filter-area')}>
            <div className={cx('filters')}>
               <CustomFilter filters={FilterItems} typeName='type' />
            </div>
            <div className={cx('content')}>
               <div className={cx('container')}>
                  {Posts.map((Post, index) => (
                     <PostItem data={Post} key={index} />
                  ))}
               </div>
               <UserSidebar />
            </div>
         </div>
      </div>
   );
};

export default User;
