import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Image from '../../../../components/Image'
import styles from './ResultItem.module.scss'
import className from 'classnames/bind'

const cx = className.bind(styles)

const PostItem = ({ data }) => (
  <Link to={'/post/' + data.POST_ID} className={cx('wrapper')}>
    <div className={cx('title')}>{data.TITLE}</div>
    <div className={cx('meta')}>
      <span className={cx('author')}>{data.AUTHOR} </span>
      <span>
        đã đăng vào
        <span> {data.PUBLISHED_AT}</span>
      </span>
    </div>
    <div className={cx('suggest')}>
      {data.SUGGEST}
    </div>
  </Link>
)


const AuthorItem = ({ data }) => (
  <Link to={'/user/' + data.ID} className={cx('wrapper', 'author')}>
    <Image className={cx("avatar")} src={data.IMAGE} />
    <div className={cx('information')}>
      <div className={cx('title')}>{data.TITLE}</div>
      <div className={cx('meta')}>
        Số bài viết:
        <span> {data.POSTS_COUNT}</span>
      </div>
    </div>

  </Link>
)

const TagItem = ({ data }) => (
  <Link to={'/tag/' + data.ID} className={cx('wrapper')}>
    <div className={cx('information')}>
      <div className={cx('title')}>{data.TITLE}</div>
      <div className={cx('meta')}>
        Số bài viết:
        <span> {data.POSTS_COUNT}</span>
      </div>
    </div>

  </Link>
)

function ResultItem({ data, type }) {
  var Comp = '';

  switch (type) {
    case 'POSTS':
      Comp = PostItem
      break;
    case 'AUTHORS':
      Comp = AuthorItem
      break;
    case 'TAGS':
      Comp = TagItem
      break;
    default: return
  }

  return (
    <Comp data={data} />
  )
}

ResultItem.propTypes = {
  data: PropTypes.object.isRequired
}

export default ResultItem