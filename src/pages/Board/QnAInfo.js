import React from 'react';

const QnAInfo = ({ key, QnA, onClick }) => {
    return (
        <tr onClick={onClick}>
            <td>{QnA.email}</td>
            <td className="tit">{QnA.title}</td>
            <td>{QnA.edit}</td>
            {/* <td>{QnA.views}</td> */}
        </tr>
    );
};

export default QnAInfo;
