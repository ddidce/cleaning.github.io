import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BoardInfo from './BoardInfo';
import '../../css/Board.css';
import axios from 'axios';

const Board = ({ logout }) => {
    // 검색기능
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([null]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // setUsers(null);
                setLoading(true);
                setError(null);
                const response = await axios.get(
                    'http://localhost:8080/SpringRest/list.do/',
                );
                setUsers(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
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
        } else if (data.author.toLowerCase().includes(searchTerm)) {
            return data;
        }
    });

    const listItem = items.map((user, i) => {
        return (
            <>
                <BoardInfo key={i} board={user} />
            </>
        );
    });

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
                        onChange={handleChange}
                        value={searchTerm}
                    />
                    <button type="submit" onClick={searchTerm}>
                        검색
                    </button>
                </form>
                <p className="table_num">
                    <span>{listItem.length}</span>건
                </p>

                {/* 공지사항 리스트 */}
                <table className="table_list">
                    <thead>
                        <tr>
                            <th>조회수</th>
                            <th>제목</th>
                            <th>아이디</th>
                            <th>시간</th>
                        </tr>
                    </thead>
                    <tbody>{listItem}</tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};
export default Board;
