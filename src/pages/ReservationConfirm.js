import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ReservationConfirm = () => {
    return (
        <>
            <Navbar />
            <div className="sub_visual sub_visual06">
                <div className="inner">
                    <h2>예약 확인</h2>
                    <ul className="sub_tab">
                        <li>
                            <Link to="/MemberModifiy">회원정보관리</Link>
                        </li>

                        <li className="on">
                            <Link to="/ReservationConfirm">예약 확인</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ReservationConfirm;
