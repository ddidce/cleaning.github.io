import React from 'react';
import { Link } from 'react-router-dom';

const BoardInfo = ({ board }) => {
    return (
        <>
            <tr key={board.num}>
                <td>{board.readcnt}</td>
                <td className="tit">
                    {/* Link를 누르면 이동전에 state를 넣어놓고 pathname경로를 따라가는데  가는곳은
                    router로 이동함 거기서 path에맞는 컴포넌트를 뿌리는데
                    이때 클릭하면서 이동할떄 미리 세팅해둔 state를 가져감 */}
                    <Link
                        to={{
                            pathname: '/BoardDetail/' + board.num,
                            state: { board: board },
                        }}
                    >
                        {board.title}
                    </Link>
                </td>
                <td>{board.author}</td>
                <td>{board.writeday.substr(0, 10)}</td>
            </tr>
        </>
    );
};

export default BoardInfo;
