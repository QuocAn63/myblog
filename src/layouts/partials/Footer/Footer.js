import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
const script = document.createElement('script');
script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
script.async = true;

document.body.appendChild(script);

function Footer() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <div className={cx('row')}>
               <div className={cx('column')}>
                  <div className={cx('footer-item')}>
                     <div className={cx('title')}>Tài nguyên</div>
                     <ul className={cx('list')}>
                        <li>
                           <Link to="/posts" className={cx('title')}>
                              Bài viết
                           </Link>
                        </li>
                        <li>
                           <Link to="/questions" className={cx('title')}>
                              Câu hỏi
                           </Link>
                        </li>
                        <li>
                           <Link to="/discussions" className={cx('title')}>
                              Thảo luận
                           </Link>
                        </li>
                        <li>
                           <Link to="/authors" className={cx('title')}>
                              Tác giả
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className={cx('column')}>
                  <div className={cx('footer-item')}>
                     <div className={cx('title')}>Mạng xã hội</div>
                     <div className={cx('socials')}>
                        <a href="https://www.facebook.com/quocan.6302/" target="_blank" className={cx('social-link')}>
                           <FontAwesomeIcon icon={faFacebook} /> <span>Facebook</span>
                        </a>
                        <a href="https://www.linkedin.com/in/%C3%A2n-cao-921b68242/" target="_blank" className={cx('social-link')}>
                           <FontAwesomeIcon icon={faLinkedin} /> <span>Linkedin</span>
                        </a>
                        <a href="https://twitter.com/nCao15" target="_blank" className={cx('social-link')}>
                          <FontAwesomeIcon icon={faTwitter} /> <span>Twitter</span>
                        </a>
                     </div>
                  </div>
               </div>
               <div className={cx('column')}>
                  <div className={cx('footer-item', 'contact')}>
                     <div className={cx('title')}>Thông tin liên hệ</div>
                     <ul className={cx('list')}>
                        <li>
                           <div className={cx('contact-info')}>
                              <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                              <span className={cx('title')}>Cao Quốc Ân</span>
                           </div>
                        </li>
                        <li>
                           <div className={cx('contact-info')}>
                              <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                              <a href="tel:+84903413280" className={cx('title')}>
                                 +84 903413280
                              </a>
                           </div>
                        </li>
                        <li>
                           <div className={cx('contact-info')}>
                              <FontAwesomeIcon icon={faEnvelopeOpen} className={cx('icon')} />
                              <a href="mailto:caoan632002@gmail.com" className={cx('title')}>
                                 caoan632002@gmail.com
                              </a>
                           </div>
                        </li>
                        <li>
                           <div className={cx('contact-info')}></div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
