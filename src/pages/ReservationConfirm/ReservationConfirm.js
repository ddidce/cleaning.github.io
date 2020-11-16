import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ReservationConfirmInfo from './ReservationConfirmInfo';
import '../../css/ReservationConfirm.css';

const ReservationConfirm = () => {
    const [prodInfo, setProdInfo] = useState([
        {
            id: 1,
            service: '의료시설',
            serviceArea: '원장실및 간호사휴게실',
            payment: '200,000 원',
            status: '결제완료',
            management: '미완료',
        },
        {
            id: 2,
            service: '공공기관',
            serviceArea: '사무실 및 계단',
            payment: '400,000 원',
            status: '결제완료',
            management: '완료',
        },
    ]);

    const onRemove = (id) => {
        setProdInfo(prodInfo.filter((user) => user.id !== id));
    };

    const listItem = prodInfo.map((list, i) => {
        return (
            <ReservationConfirmInfo
                key={i}
                reservation={list}
                onRemove={onRemove}
            />
        );
    });
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
            <div className="order_product">
                <div className="order_title">주문 상품 정보</div>
                <table border="0">
                    <colgroup>
                        <col style={{ width: '150px' }} />
                        <col style={{ width: '200px' }} />
                        <col style={{ width: 'auto' }} />
                        <col style={{ width: '110px' }} />
                        <col style={{ width: '130px' }} />
                        <col style={{ width: '130px' }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col" colSpan="2">
                                상품정보
                            </th>
                            <th scope="col">결제금액</th>
                            <th scope="col">주문상태</th>
                            <th scope="col">관리</th>
                        </tr>
                    </thead>
                    <tbody>{listItem}</tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default ReservationConfirm;
