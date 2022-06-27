import PropTypes from 'prop-types';
import styles from './Tag.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Tag({ path, title, value }) {
   return (
      <Link to={path} className={cx('wrapper')}>
         <span className={cx('title')}>{title}</span>
         <span className={cx('value')}>{value}</span>
      </Link>
   );
}

Tag.propTypes = {
   path: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   value: PropTypes.number.isRequired,
};

export default Tag;
