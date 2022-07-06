import styles from './Profile.module.scss';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../../actions/AuthAction';
import classNames from 'classnames/bind';
import ProfileSidebar from '../../layouts/components/ProfileSidebar';
import {
   faAddressBook,
   faAddressCard,
   faEnvelope,
   faHome,
   faKey,
   faShieldHalved,
   faSquareArrowUpRight,
   faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

const SidebarItems = [
   {
      icon: faHome,
      title: 'Trang chủ',
      to: '/profile',
      end: true,
   },
   {
      icon: faAddressCard,
      title: 'Thông tin của tôi',
      children: [
         {
            icon: faUser,
            title: 'Thông tin cá nhân',
            to: '/profile/personal',
         },
         {
            icon: faAddressBook,
            title: 'Thông tin liên hệ',
            to: '/profile/contact',
         },
         {
            icon: faEnvelope,
            title: 'Địa chỉ email',
            to: '/profile/email',
         },
      ],
   },
   {
      icon: faShieldHalved,
      title: 'Bảo mật',
      children: [
         {
            icon: faKey,
            title: 'Mật khẩu',
            to: '/profile/password',
         },
         {
            icon: faSquareArrowUpRight,
            title: 'Tài khoản đã liên kết',
            to: '/profile/linked',
         },
      ],
   },
];

function Profile({ ...props }) {
   const { user, actions } = props;

   return (
      <div className={cx('wrapper')}>
         <ProfileSidebar items={SidebarItems} />
         <div className={cx('main-content')}>
            <Outlet context={{ user, actions }} />
         </div>
      </div>
   );
}

function mapStateToProps(state) {
   return {
      user: state.authReducers,
   };
}

function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(AuthActions, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
