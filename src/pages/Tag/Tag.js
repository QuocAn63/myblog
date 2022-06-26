import styles from './Tag.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button/Button';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { TagSidebar } from '../../layouts/components/Sidebar';
import CustomFilter from '../../components/Filter/CustomFilter';
import PostItem from '../../components/PostItem';

const cx = classNames.bind(styles);

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
   { title: 'Người theo dõi', path: 'followers' },
];

function Tag() {
   const rootPath = '/tag/3';

   return (
      <div className={cx('wrapper')}>
         <div className={cx('tag-about')}>
            <p className={cx('tag-name')}>Javascript</p>
            <div className={cx('actions')}>
               <Button leftIcon={faPlus} outline className={cx('action-btn')}>
                  Theo dõi
               </Button>
               <Button leftIcon={faCheck} primary className={cx('action-btn')}>
                  Đang theo dõi
               </Button>
            </div>
         </div>
         <div className={cx('container')}>
            <div className={cx('content')}>
               <div className={cx('filters')}>
                  <CustomFilter filters={FilterItems} rootPath={rootPath} defaultPath='posts' />
               </div>
               <div className={cx('main-content')}>
                  {Posts.map((post, index) => (
                     <PostItem data={post} key={index} />
                  ))}
               </div>
            </div>
            <TagSidebar /> 
         </div>
      </div>
   );
}

export default Tag;
