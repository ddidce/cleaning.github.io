import React from 'react';
import { Link } from 'react-router-dom';

const QnAInfo = ({ QnA, onClick }) => {
    return (
        <tr onClick={onClick}>
            <td className="tit">
                <Link
                    to={{
                        pathname: '/QnADetail/' + QnA.seq,
                        state: { QnA: QnA },
                    }}
                >
                    {QnA.title}
                </Link>
            </td>
            <td>{QnA.email}</td>
        </tr>
    );
};

export default QnAInfo;
