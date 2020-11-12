import React, { useEffect, useState } from 'react';
import '../../Board.css';

import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BoardInfo from './BoardInfo';

const Board = () => {
    // ????
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedKey, setSelectedKey] = useState(-1);

    const boards = [
        {
            id: 1,
            title: '???? ????? ???????.',
            date: '2019.12.23',
            views: '509',
        },

        {
            id: 2,
            title: '???? ???? ???',
            date: '2020.06.29',
            views: '106',
        },
        {
            id: 3,
            title: '???19 ?? ????',
            date: '2020.02.25',
            views: '296',
        },
        {
            id: 4,
            title: '???? ??? ??? ??? ?? ??',
            date: '2020.02.12',
            views: '327',
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
        const items = boards.filter((data) => {
            if (searchTerm === null) {
                return data;
            } else if (data.title.toLowerCase().includes(searchTerm)) {
                return data;
            }
        });
        setSearchResults(items);
    }, [searchTerm]);

    // const items = boards.filter((data) => {
    //     if (searchTerm === null) {
    //         return data;
    //     } else if (data.title.toLowerCase().includes(searchTerm)) {
    //         return data;
    //     }
    // });
    // console.log(items);

    const listItem = searchResults.map((board, i) => {
        return (
            <BoardInfo
                key={i}
                board={board}
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
                    <h2>????</h2>
                    <ul className="sub_tab">
                        <li className="on">
                            <Link to="/Board">????</Link>
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
                        <option value="b_total">??</option>
                        <option value="b_title">??</option>
                        <option value="b_text">??</option>
                    </select>
                    <input
                        type="text"
                        className="input_search"
                        name="keyword"
                        id="keyword"
                        onChange={handleChange}
                        value={searchTerm}
                    />
                    <button type="submit" onClick={searchResults}>
                        ??
                    </button>
                </form>
                <p className="table_num">
                    <span>{listItem.length}</span>?
                </p>

                {/* ???? ??? */}
                <table className="table_list">
                    <tbody>{listItem}</tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};
export default Board;
