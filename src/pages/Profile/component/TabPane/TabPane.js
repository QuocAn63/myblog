import PropTypes from 'prop-types';
import styles from './TabPane.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '../../../../components/Image';

const cx = classNames.bind(styles);

function TabPane({ image, title, to }) {
   return <div className={cx('wrapper')}>
      <Link to={to} className={cx('link')} >
         <Image src={image} className={cx('image')} />
         <p className={cx('title')}>{title}</p>
      </Link>
   </div>;
}

export default TabPane;
