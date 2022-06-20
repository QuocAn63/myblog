import React from 'react';

import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import SidebarItem from './SidebarItem/SidebarItem';

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
   },
];

function Sidebar() {
   return (
      <div className={cx('wrapper')}>
         {SidebarItems.map((item, index) => (
            <div className={cx('item')} key={index}>
               <div className={cx('title')}>{item.TITLE}</div>
               {item.DATA.map(data => (
                  <SidebarItem data={data} key={data.ID} />
               ))}
            </div>
         ))}
      </div>
   );
}

export default Sidebar;
