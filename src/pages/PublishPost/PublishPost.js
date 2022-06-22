import React from 'react'
import styles from './PublishPost.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function PublishPost() {
  return (
    <div className={cx('wrapper')}>
      <form action="" id="post-form">
        <div className={cx('form-group')}>
          <div className={cx('input-wrapper')}>
            <input type="text" placeholder="Tiêu đề" />
          </div>
        </div>
        <div className={cx('form-group')}>
          <div className={cx('input-wrapper')}>
            <input type="text" placeholder="Gắn thẻ bài viết (Tối đa 5 thẻ, ít nhất 1 thẻ)" />
          </div>
          <button type="button" className={cx('submit-buttom')}></button>
        </div>
      </form>
    </div>
  )
}

export default PublishPost