import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../css/QnA.css';
import QnAInfo from './QnAInfo';

const QnA = ({ logout, qnaRegister }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState({});
    const [selectedKey, setSelectedKey] = useState(-1);
    const location = useLocation();
    useEffect(() => {
        const QnAInfo = location.state;
        console.dir(QnAInfo);
    }, [location]);
    const qna = [];

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClick = (key) => {
        setSelectedKey(key);
    };

    // useEffect(() => {
    //     const items = qna.filter((data) => {
    //         if (searchTerm === null) {
    //             return data;
    //         } else if (data.title.toLowerCase().includes(searchTerm)) {
    //             return data;
    //         }
    //     });
    //     setSearchResult(items);
    // }, [searchTerm]);
    //더미 데이터만큼 map사용
    const listQna = qna.map((QnA, i) => {
        // <tr onClick={handleClick}>
        //     <td>{QnA.id}</td>
        //     <td className="tit">{QnA.title}</td>
        //     <td>{QnA.date}</td>
        //     <td>{QnA.views}</td>
        // </tr>
        return (
            <QnAInfo
                key={i}
                QnA={QnA}
                onClick={() => {
                    handleClick(i);
                }}
            />
        );
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
                        <Link to="/QnAWriteForm">질문하기</Link>
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
                    <tbody>{listQna}</tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default QnA;
