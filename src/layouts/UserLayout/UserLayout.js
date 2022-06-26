import PropTypes from 'prop-types';

import styles from './UserLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

const cx = classNames.bind(styles);

function UserLayout({ children, ...props }) {
   return (
      <>
         <Header {...props} />
         <div className={cx('wrapper')}>
            <div className={cx('container')}>
               <div className={cx('content')}>{children}</div>
            </div>
         </div>
         <Footer />
      </>
   );
}

UserLayout.propTypes = {
   children: PropTypes.node.isRequired,
};

export default UserLayout;
