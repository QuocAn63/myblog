import PropTypes from 'prop-types';
import styles from './TabPane.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function TabPane() {
   return <div className={cx('wrapper')}></div>;
}

export default TabPane;
