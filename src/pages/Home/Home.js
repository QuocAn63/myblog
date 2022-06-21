import React from 'react'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'

import PostContainer from '../../components/PostContainer/PostContainer'

const cx = classNames.bind(styles)



function Home() {
  return (
    <div className={cx('wrapper')}>
      <PostContainer />
      <PostContainer />
      <PostContainer />
    </div>
  )
}

export default Home