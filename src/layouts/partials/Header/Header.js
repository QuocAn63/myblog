import React from 'react'
import { NavLink } from 'react-router-dom'

import Search from '../../components/Search'

import styles from './Header.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const NavigationItems = [
  {
    title: "Trang chủ",
    path: "/"
  }, {
    title: "Bài viết",
    path: "/posts"
  }, {
    title: "Về chúng tôi",
    path: "/about"
  }
]

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner-wrapper")}>
        <div className={cx("site-navigation")}>
          {NavigationItems.map((item, index) => <NavLink key={index} className={Nav => cx("navigation-item", {active: Nav.isActive})} to={item.path}>{item.title}</NavLink>)}
        </div>
        <Search />
      </div>
    </div>
  )
}

export default Header