import { NavLink } from 'react-router-dom'

import styles from './PostFilter.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function PostFilter() {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('nav-container')}>
            <NavLink to="/posts/newest"  className={nav => cx('nav-link', {active: nav.isActive})}>Mới nhất</NavLink>
            <NavLink to="/posts/popular" className={nav => cx('nav-link', {active: nav.isActive})} >Quan tâm nhiều nhất</NavLink>
            <NavLink to="/posts/series"  className={nav => cx('nav-link', {active: nav.isActive})}>Series</NavLink>
        </div>
    </div>
  )
}

export default PostFilter