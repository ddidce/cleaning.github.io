import React from 'react';
import { Link } from 'react-router-dom';

const QnAInfo = ({ key, QnA, onClick }) => {
    return (
        <tr onClick={onClick}>
            <td>{QnA.content}</td>
            <td className="tit">
                <Link to="/QnADetail">{QnA.title}</Link>
            </td>
            {/* <td>{QnA.views}</td> */}
        </tr>
    );
};

export default QnAInfo;
