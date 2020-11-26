import React, { useEffect, useState } from 'react';
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BoardInfo from './BoardInfo';
import '../../css/Board.css';
import axios from 'axios';

const BoardDetail = ({ routeProps, logout }) => {
    // const BoardDetail = ({ logout, board }) => {
    // 검색기능
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedKey, setSelectedKey] = useState(-1);
    const [boardDetail, setBoardDetail] = useState([]);
    const history = useHistory();
    console.log(routeProps);
    useEffect(() => {
        const users = async () => {
            try {
                let URL = `http://localhost:8080/SpringRest/retrieve.do?num=${routeProps.match.params.num}`;
                const response = await axios.get(URL);
                setBoardDetail(response.data);
            } catch (error) {
                // alert('에러입니다,');
            }
        };
        users();
    }, [routeProps]);

    console.log(boardDetail);
    // const backBtn = () => {
    //     history.push('/Board');
    // };

    return (
        <>
            <Navbar logout={logout} />
            <div className="sub_visual sub_visual06">
                <div className="inner">
                    <h2>공지사항</h2>
                    <ul className="sub_tab">
                        <li className="on">
                            <Link to="/Board">공지사항</Link>
                        </li>

                        <li>
                            <Link to="/QnA">Q & A</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="inner_search">
                <form id="searchForm" name="searchForm" className="search_form">
                    <input type="hidden" name="bs_code" value="board1" />
                    <input type="hidden" name="page" value="1" />
                    <select name="keyword_option" id="keyword_option">
                        <option value="b_total">전체</option>
                        <option value="b_title">제목</option>
                        <option value="b_text">아이디</option>
                    </select>
                    <input
                        type="text"
                        className="input_search"
                        name="keyword"
                        id="keyword"
                    />
                    <button type="submit">검색</button>
                </form>
                <p className="table_num">
                    <span>1</span>건
                </p>

                {/* 공지사항 리스트 */}
                <table className="table_list">
                    <thead>
                        <tr>
                            <th>내용</th>
                            {/* <th>제목</th>
                            <th>아이디</th>
                            <th>시간</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="b_content">{boardDetail.content}</td>
                        </tr>
                    </tbody>
                </table>

                <button className="b_Btn">목록</button>
            </div>
            <Footer />
        </>
    );
};
export default BoardDetail;
