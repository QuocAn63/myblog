import PropTypes from 'prop-types';

import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Sidebar from '../../layouts/components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
   return (
      <>
         <Header />
         <div className={cx('wrapper')}>
            <div className={cx('container')}>
               <div className={cx('content')}>{children}</div>
               <Sidebar />
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
