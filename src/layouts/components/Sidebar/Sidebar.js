import { memo } from 'react';
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import SidebarItem from './SidebarItem/SidebarItem';
import AuthorTab from '../../../components/AuthorTab/AuthorTab';

const cx = classNames.bind(styles);

const SidebarItems = [
   {
      TITLE: 'BÀI VIẾT MỚI NHẤT',
      PATH: '/posts/',
      DATA: [
         {
            ID: '1',
            TITLE: 'Làm thế nào để thay đổi style của các hình (polygon, polyline) khi thực hiện edit trên react-leaflet-draw ?',
            AUTHOR: 'Cao Quoc An',
         },
         {
            ID: '2',
            TITLE: 'Làm thế nào để thay đổi style của các hình (polygon, polyline) khi thực hiện edit trên react-leaflet-draw ?',
            AUTHOR: 'Cao Quoc An',
         },
         {
            ID: '3',
            TITLE: 'Làm thế nào để thay đổi style của các hình (polygon, polyline) khi thực hiện edit trên react-leaflet-draw ?',
            AUTHOR: 'Cao Quoc An',
         },
      ],
   },
   {
      TITLE: 'CÂU HỎI MỚI NHẤT',
      PATH: '/posts/',
      DATA: [
         {
            ID: '1',
            TITLE: 'Làm thế nào để thay đổi style của các hình (polygon, polyline) khi thực hiện edit trên react-leaflet-draw ?',
            AUTHOR: 'Cao Quoc An',
         },
         {
            ID: '2',
            TITLE: 'Làm thế nào để thay đổi style của các hình (polygon, polyline) khi thực hiện edit trên react-leaflet-draw ?',
            AUTHOR: 'Cao Quoc An',
         },
         {
            ID: '3',
            TITLE: 'Làm thế nào để thay đổi style của các hình (polygon, polyline) khi thực hiện edit trên react-leaflet-draw ?',
            AUTHOR: 'Cao Quoc An',
         },
      ],
   }
];

const TopAuthors = [ {
   AUTHOR: {
      ID: '1',
      FULL_NAME: "CAO QUOC AN",
      AVATAR: ""
   },
   META: {
      RATING: 0,
      POSTS: 0,
      FOLLOWING: 0
   }
},
{
   AUTHOR: {
      ID: '2',
      FULL_NAME: "CAO QUOC AN",
      AVATAR: ""
   },
   META: {
      RATING: 0,
      POSTS: 0,
      FOLLOWING: 0
   }
},
{
   AUTHOR: {
      ID: '3',
      FULL_NAME: "CAO QUOC AN",
      AVATAR: ""
   },
   META: {
      RATING: 0,
      POSTS: 0,
      FOLLOWING: 0
   }
}
]

function Sidebar() {

   return (
      <div className={cx('wrapper')}>
         {SidebarItems.map((item, index) => (
            <div className={cx('item')} key={index}>
               <Link to={item.PATH} className={cx('title')}>{item.TITLE}</Link>
               {item.DATA.map(data => (
                  <SidebarItem data={data} key={data.ID} />
               ))}
            </div>
         ))}
         <div className={cx('item')}>
               <Link to="/authors/top" className={cx('title')}>tác giả hàng đầu</Link>
                  {TopAuthors.map((author, index) => (
                     <AuthorTab ID={author.AUTHOR.ID} AVATAR={author.AUTHOR.AVATAR} FULL_NAME={author.AUTHOR.FULL_NAME} POSTS={author.META.POSTS}  RATING={author.META.RATING} FOLLOWING={author.META.FOLLOWING} key={index} />
                  ))}
            </div>
      </div>
   );
}

export default memo(Sidebar);
