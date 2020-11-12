import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../QnA.css';
import QnAInfo from './QnAInfo';

const QnA = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [selectedKey, setSelectedKey] = useState(-1);
    const qna = [
        {
            id: 1,
            title: '??? ??? ?????.',
            date: '2020.11.03',
            views: 5,
        },
        {
            id: 2,
            title: '??? ??? ?????.',
            date: '2020.10.13',
            views: 35,
        },
        {
            id: 3,
            title: '??? ??? ?????.',
            date: '2020.10.06',
            views: 34,
        },
        {
            id: 4,
            title: '??? ??? ?????.',
            date: '2020.10.01',
            views: 66,
        },
        {
            id: 5,
            title: '?? ??? ?????.',
            date: '2020.09.27',
            views: 69,
        },
        {
            id: 6,
            title: '??? ??? ?????.',
            date: '2020.09.20',
            views: 86,
        },
        {
            id: 7,
            title: '? ?? ?????',
            date: '2020.0917',
            views: 1111,
        },
    ];
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClick = (key) => {
        setSelectedKey(key);
    };
    console.log(selectedKey + 1);

    useEffect(() => {
        const items = qna.filter((data) => {
            if (searchTerm === null) {
                return data;
            } else if (data.title.toLowerCase().includes(searchTerm)) {
                return data;
            }
        });
        setSearchResult(items);
    }, [searchTerm]);
    //?? ????? map??
    const listQna = searchResult.map((QnA, i) => {
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
            <Navbar />
            <div className="sub_visual sub_visual06">
                <div className="inner">
                    <h2>Q & A</h2>
                    <ul className="sub_tab">
                        <li>
                            <Link to="/Board">????</Link>
                        </li>

                        <li className="on">
                            <Link to="/QnA">Q & A</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="inner_qna">
                <div class="praise_top">
                    <div>
                        <p>
                            <em>??? ??? ??!</em>????? ??? ??
                            ??? ???????.
                            <br />
                            ?? ?? ???? ??! ???????.
                        </p>
                        <Link to="/QnAWriteForm">????</Link>
                    </div>
                </div>

                <form
                    id="searchForm"
                    name="searchForm"
                    class="search_form"
                    method="get"
                >
                    <input type="hidden" name="bs_code" value="board3" />
                    <input type="hidden" name="page" value="1" />
                    <select name="keyword_option" id="keyword_option">
                        <option value="b_total">??</option>
                        <option value="b_title">??</option>
                        <option value="b_text">??</option>
                    </select>
                    <input
                        type="text"
                        class="input_search"
                        name="keyword"
                        id="keyword"
                        onChange={handleChange}
                        value={searchTerm}
                    />
                    <button type="submit">??</button>
                </form>
                <p class="table_num">
                    <span>{listQna.length}</span>?
                </p>

                {/* ???? ???  */}
                <table class="table_list">
                    <tbody>{listQna}</tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default QnA;
