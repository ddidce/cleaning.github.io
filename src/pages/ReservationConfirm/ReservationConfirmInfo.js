import React from 'react';

const ReservationConfirmInfo = ({ reservation, onRemove }) => {
    return (
        <tr>
            <td>{reservation.id}</td>
            <td>{reservation.service}</td>
            <td>{reservation.serviceArea}</td>
            <td>{reservation.payment}</td>
            <td>{reservation.status}</td>
            <td>
                {reservation.management === '완료' ? (
                    <button
                        className="reservation_btn"
                        onClick={() => onRemove(reservation.id)}
                    >
                        {reservation.management}
                    </button>
                ) : (
                    '미완료'
                )}
            </td>
        </tr>
    );
};

export default ReservationConfirmInfo;
