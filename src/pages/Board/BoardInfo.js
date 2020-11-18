import React from 'react';
import { Link } from 'react-router-dom';

// const BoardInfo = ({ key, board, onClick }) => {
//     return (
//         <tr onClick={onClick}>
//             <td>{board.data.mno}</td>
//             <td className="tit">
//                 <Link>{board.data.firstName}</Link>
//             </td>
//             <td>{board.data.lastName}</td>
//             {/* <td>{board.views}</td> */}
//         </tr>
//     );
// };
const BoardInfo = ({ key, board, onClick }) => {
    return (
        <tr onClick={onClick}>
            <td>{board.num}</td>
            <td>{board.author}</td>
            <td className="tit">
                <Link>{board.title}</Link>
            </td>
            <td>{board.writeday}</td>
            {/* <td>{board.views}</td> */}
        </tr>
    );
};

export default BoardInfo;
