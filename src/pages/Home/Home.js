import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import PostContainer from '../../components/PostContainer/PostContainer';

const cx = classNames.bind(styles);

function Home() {
   return (
      <div className={cx('wrapper')}>
         <PostContainer title={'Bài viết mới nhất'} />
         <PostContainer title={'Bài viết nổi bậc'} />
         <PostContainer title={'Câu hỏi mới nhất'} />
      </div>
   );
}

export default Home;
