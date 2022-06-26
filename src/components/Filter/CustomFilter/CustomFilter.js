import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './CustomerFilter.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CustomFilter({ filters, defaultPath, rootPath }) {
   const location = useLocation();

   return (
      <div className={cx('filter-container')}>
         {filters.map((item, index) => (
            <NavLink
               to={rootPath + '/' + item.path}
               className={(nav) =>
                  cx('filter-item', {
                     active: (item.path === defaultPath && rootPath === location.pathname) || nav.isActive,
                  })
               }
               key={index}
            >
               {item.title}
            </NavLink>
         ))}
      </div>
   );
}

CustomFilter.propTypes = {
   filters: PropTypes.array.isRequired,
   defaultPath: PropTypes.string,
   rootPath: PropTypes.string.isRequired,
};

export default CustomFilter;
