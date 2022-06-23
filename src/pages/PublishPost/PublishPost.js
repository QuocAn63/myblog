import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styles from './PublishPost.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PublishPost() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('post-form')}>
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
                  <button type="button" className={cx('submit-buttom')}>
                     Xuất bản bài viết
                  </button>
               </div>
               <div className={cx('form-group')}>
                  <div className={cx('editor')}>
                     <CKEditor
                        className={cx('editor')}
                        editor={ClassicEditor}
                        data={'Nội dung bài viết'}
                        onChange={(event, editor) => {
                           const data = editor.getData();
                           console.log(data);
                        }}
                     />
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}

export default PublishPost;
