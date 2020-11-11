import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
 

const footer = () => {
    return (
        <div className="footer-contents">
            <footer>
                <div className="footer-contents_f">
                    <p>Cleaning Company</p>
                    <p>Cleaning</p>
                </div>

                <div className="footer-contents_s">
                    <p>서울특별시 강남구 역삼동</p>
                    <p>819-10 세경빌딩 31층</p>
                </div>

                <div className="footer-contents_t">
                    <p>Tel : 02-2362-5923</p>
                    <p>영업시간 : 9am - 7pm</p>
                </div>

                <div className="footer-contents_sf">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/">
                                <FontAwesomeIcon icon={faTwitter} />
                                <li><Link to='/Safeinfo'><h6>이용약관</h6></Link></li>
                                <li><Link to='/Safeinfo2'><h6>개인정보처리방침</h6></Link></li>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* sf => second fourth */}
                <div className="footer-contents_ss">
                    {/* Miso 이름 바꿔야함 */}
                    <p> © 2020. Project. Miso, Inc. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default footer;
