import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import PostContainer from '../../components/PostContainer/PostContainer';

const cx = classNames.bind(styles);

function Home() {
   return (
      <div className={cx('wrapper')}>
         <PostContainer title={'Bài viết mới nhất'} data={{}} />
         <PostContainer title={'Bài viết nổi bậc'}  data={{}}/>
         <PostContainer title={'Câu hỏi mới nhất'}  data={{}}/>
      </div>
   );
}

export default Home;
