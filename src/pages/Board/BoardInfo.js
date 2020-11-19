import React from 'react';
import { Link } from 'react-router-dom';
import BoardDetail from './BoardDetail';

const BoardInfo = ({ key, board, details }) => {
    const detail = () => {
        return <BoardDetail board={board} />;
    };
    return (
        <>
            <tr
            // onClick={() => {
            //     console.log(details);
            //     return <BoardDetail board={board} />;
            // }}
            >
                <td>{board.num}</td>
                <td className="tit">
                    <Link to="/BoardDetail">{board.title}</Link>
                </td>
                <td>{board.author}</td>
                <td>{board.writeday.substr(0, 10)}</td>
                {/* <td>{board}</td> */}
            </tr>
        </>
    );
};

export default BoardInfo;
