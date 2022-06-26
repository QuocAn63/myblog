import PropTypes from 'prop-types';

import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import DefaultSidebar, { UserSidebar, TagSidebar } from '../../layouts/components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children, Sidebar, ...props }) {
   let SidebarComp = '';
   switch (Sidebar) {
      case 'user':
         SidebarComp = UserSidebar;
         break;
      case 'tag':
         SidebarComp = TagSidebar;
         break;
      default:
         SidebarComp = DefaultSidebar;
   }

   return (
      <>
         <Header {...props} />
         <div className={cx('wrapper')}>
            <div className={cx('container')}>
               <div className={cx('content')}>{children}</div>
               <SidebarComp />
            </div>
         </div>
         <Footer />
      </>
   );
}

DefaultLayout.propTypes = {
   children: PropTypes.node.isRequired,
};

export default DefaultLayout;
