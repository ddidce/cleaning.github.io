import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = ({ logout }) => {
    const cureentUser = JSON.parse(sessionStorage.getItem('User'));
    const onLogout = () => {
        logout();
        sessionStorage.clear();
        window.location.href = '/';
    };
    return (
        <header className="navbar">
            <nav>
                <div className="navbar-left"></div>
                <div className="navbar-right">
                    <ul>
                        <li className="logo">
                            <Link to="/">로고</Link>
                        </li>
                        <li className="nav-menu">
                            <Link to="/">홈</Link>
                        </li>
                        <li className="nav-menu">
                            <Link to="/CompanyInfo">회사소개</Link>
                        </li>
                        <li className="nav-menu">
                            <Link to="/DetailService">서비스</Link>
                        </li>
                        <li className="nav-menu">
                            <Link to="/AboutCustom">고객지원</Link>
                        </li>
                        <li className="nav-menu">
                            <Link to="/Board">공지사항</Link>
                        </li>
                        {(() => {
                            // 받아온 프롭스로 정보가 있으면 if문 실행
                            // if (user) {
                            if (cureentUser) {
                                return (
                                    <div className="login_part">
                                        <li id="login" className="info">
                                            <Link
                                                to="/MemberModifiy"
                                                target="_self"
                                            >
                                                정보변경
                                            </Link>
                                        </li>
                                        <li id="login">
                                            <Link
                                                to="/"
                                                target="_self"
                                                onClick={onLogout}
                                            >
                                                로그아웃asd
                                            </Link>
                                        </li>
                                    </div>
                                );
                            }
                            //if문이 끝났으니 원래 함수 실행 > 데이터가 없을 경우
                            return (
                                <div className="login_part">
                                    <li id="login" className="login">
                                        <Link to="/Login" target="_self">
                                            로그인
                                        </Link>
                                    </li>
                                    <li id="login">
                                        <Link to="/Signup" target="_self">
                                            회원가입
                                        </Link>
                                    </li>
                                </div>
                            );
                        })()}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
