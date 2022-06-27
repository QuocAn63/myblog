import styles from './SearchSidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SearchSidebar() {
   return <div className={cx('wrapper')}>Search sidebar</div>;
}

export default SearchSidebar;
