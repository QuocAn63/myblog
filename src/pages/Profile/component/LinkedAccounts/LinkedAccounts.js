import styles from '../ProfileLocalStyle/ProfileLocal.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Button from '../../../../components/Button';
import { faPlug, faPlugCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function LinkedAccount() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <div className={cx('form-group')}>
               <p className={cx('hero-title')}>Tài khoản được liên kết</p>
               <div className={cx('input-container')}>
                  <table className={cx('linked-account-table')}>
                     <colgroup>
                        <col name="col-group" />
                        <col name="col-group" />
                        <col name="col-group" />
                     </colgroup>
                     <thead>
                        <tr>
                           <th>Nhà cung cấp</th>
                           <th>Tài khoản</th>
                           <th>Hành động</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>
                              <div className={cx('linked-account-provider')}>
                                 <FontAwesomeIcon icon={faFacebook} className={cx('provider-icon', 'facebook')} />
                                 <span className={cx('provider-name')}>Facebook</span>
                              </div>
                           </td>
                           <td>
                              <span className={cx('linked-account-status')}>Không có tài khoản nào được kết nối</span>
                           </td>
                           <td>
                              <Button text leftIcon={faPlug} className={cx('linked-account-btn')}>
                                 Kết nối
                              </Button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div className={cx('linked-account-provider')}>
                                 <FontAwesomeIcon icon={faGoogle} className={cx('provider-icon', 'google')} />
                                 <span className={cx('provider-name')}>Facebook</span>
                              </div>
                           </td>
                           <td>
                              <span className={cx('linked-account-status')}>mototition@gmail.com</span>
                           </td>
                           <td>
                              <Button text leftIcon={faPlugCircleMinus} className={cx('linked-account-btn')}>
                                 Ngắt kết nối
                              </Button>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div className={cx('linked-account-provider')}>
                                 <FontAwesomeIcon icon={faGithub} className={cx('provider-icon', 'github')} />
                                 <span className={cx('provider-name')}>Github</span>
                              </div>
                           </td>
                           <td>
                              <span className={cx('linked-account-status')}>Không có tài khoản nào được kết nối</span>
                           </td>
                           <td>
                              <Button text leftIcon={faPlug} className={cx('linked-account-btn')}>
                                 Kết nối
                              </Button>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
}

export default LinkedAccount;
