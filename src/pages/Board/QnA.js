import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../css/QnA.css';
import QnAInfo from './QnAInfo';
import axios from 'axios';

const QnA = ({ logout, cureentUser }) => {
    const [searchTerm, setSearchTerm] = useState('');
<<<<<<< HEAD
    const [users, setUsers] = useState([null]);

    console.log(cureentUser);
=======
    const [selectedKey, setSelectedKey] = useState(-1);
    const [users, setUsers] = useState([null]);

>>>>>>> cde2427a8ad1bcfd2ff1728d1d9437e9cddb92f8
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8080/SpringRest/qnaList.do/',
                );
                setUsers(response.data);
            } catch (e) {}
        };
        fetchUsers();
    }, []);
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const items = users.filter((data) => {
        if (data === null) {
            return data;
        } else if (data.title.toLowerCase().includes(searchTerm)) {
            return data;
        } else if (data.email.toLowerCase().includes(searchTerm)) {
            return data;
        }
    });

    const listQna = items.map((QnA, i) => {
        return <QnAInfo key={i} QnA={QnA} />;
    });
    return (
        <>
            <Navbar logout={logout} />
            <div className="sub_visual sub_visual06">
                <div className="inner">
                    <h2>Q & A</h2>
                    <ul className="sub_tab">
                        <li>
                            <Link to="/Board">공지사항</Link>
                        </li>

                        <li className="on">
                            <Link to="/QnA">Q & A</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="inner_qna">
                <div className="praise_top">
                    <div>
                        <p>
                            <em>고객의 소중한 공간!</em>프로젝트가 완벽한 청소
                            기술로 책임지겠습니다.
                            <br />
                            전문 청소 서비스의 시작! 프로젝트입니다.
                        </p>
<<<<<<< HEAD
                        {cureentUser ? (
                            <Link to="/QnAWriteForm">질문하기</Link>
                        ) : (
                            <Link
                                to="/Login"
                                onClick={() => {
                                    alert('로그인 후 이용해 주세요');
=======
                        {cureentUser === null ? (
                            <Link
                                to="/Login"
                                onClick={() => {
                                    alert('로그인 후 이용해주세요.');
>>>>>>> cde2427a8ad1bcfd2ff1728d1d9437e9cddb92f8
                                }}
                            >
                                질문하기
                            </Link>
<<<<<<< HEAD
=======
                        ) : (
                            <Link to="/QnAWriteForm">질문하기</Link>
>>>>>>> cde2427a8ad1bcfd2ff1728d1d9437e9cddb92f8
                        )}
                    </div>
                </div>

                <form
                    id="searchForm"
                    name="searchForm"
                    className="search_form"
                    method="get"
                >
                    <input type="hidden" name="bs_code" value="board3" />
                    <input type="hidden" name="page" value="1" />
                    <select name="keyword_option" id="keyword_option">
                        <option value="b_total">전체</option>
                        <option value="b_title">제목</option>
                        <option value="b_text">내용</option>
                    </select>
                    <input
                        type="text"
                        className="input_search"
                        name="keyword"
                        id="keyword"
                        onChange={handleChange}
                        value={searchTerm}
                    />
                    <button type="submit">검색</button>
                </form>
                <p className="table_num">
                    <span>{listQna.length}</span>건
                </p>

                {/* 공지사항 리스트  */}
                <table className="table_list">
                    <thead>
                        <tr>
                            <th>제목</th>
                            <th>이메일</th>
                        </tr>
                    </thead>
                    <tbody>{listQna}</tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default QnA;
