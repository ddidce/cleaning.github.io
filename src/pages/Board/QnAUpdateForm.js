import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../css/QnAWriteForm.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const QnAUpdateForm = ({ logout, routeProps }) => {
    const [users, setUsers] = useState([null]);
    const BASE_URL = `http://localhost:8080/SpringRest/qnaupdatePro.do`;
    const Headers = {
        'Access-Control-Allow-Credentials': 'true',
        'Content-type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
    };
    const history = useHistory();
    const onChangeUsers = (e) => {
        setUsers({
            ...users,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        const users = async () => {
            try {
                let URL = `http://localhost:8080/SpringRest/qnaupdate.do?seq=${routeProps.match.params.seq}`;
                const response = await axios.get(URL);
                setUsers(response.data);
            } catch (error) {}
        };
        users();
    }, [routeProps]);

    const onClickBtn = () => {
        alert('완료되었습니다.');

        axios
            .post(BASE_URL, { qnaRegister: users }, Headers)
            .catch(function (error) {
                if (error.response) {
                    // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                    // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                    // Node.js의 http.ClientRequest 인스턴스입니다.
                    console.log(error.request);
                } else {
                    // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
            .then(() => {
                history.push('/QnA');
            });
    };
    return (
        <>
            <Navbar logout={logout} />
            <div className="sub_visual sub_visual06">
                <div className="inner">
                    <h2>Q & A</h2>
                    <ul className="sub_tab">
                        <li>
                            <Link to="/Board">공지사항</Link>
                        </li>

                        <li className="on">
                            <Link to="/QnA">Q & A</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <h3 className="qna_tit">질문하기</h3>

            <p className="qna_txt">
                '프로젝트 서비스를 이용해 주셔서 감사합니다. '
            </p>
            <div className="QnA_write_form write_praise">
                <input
                    type="hidden"
                    name="seq"
                    defaultValue={users.seq}
                    maxLength="10"
                    onChange={onChangeUsers}
                />

                <div className="row">
                    <label htmlFor="wirte_phone" className="label">
                        연락처 *
                    </label>
                    <div className="input_box phone">
                        <div className="phone_input">
                            <input
                                type="tel"
                                name="phone"
                                defaultValue={users.phone}
                                maxLength="13"
                                onChange={onChangeUsers}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="wirte_email" className="label">
                        E-Mail *
                    </label>
                    <div className="input_box email">
                        <div className="email_input">
                            <input
                                type="text"
                                name="email"
                                value={users.email}
                                placeholder={users.email}
                                maxLength="50"
                                onChange={onChangeUsers}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="wirte_title" className="label">
                        제목 *
                    </label>
                    <div className="input_box title">
                        <input
                            type="text"
                            name="title"
                            value={users.title}
                            maxLength="100"
                            onChange={onChangeUsers}
                        />
                    </div>
                </div>
                <div className="row contents">
                    <label htmlFor="wirte_edit" className="label">
                        내용 *
                    </label>
                    <div className="input_box">
                        <textarea
                            className="ckeditor"
                            id="b_text"
                            name="content"
                            value={users.content}
                            onChange={onChangeUsers}
                        ></textarea>
                    </div>
                </div>

                <div className="row">
                    <label htmlFor="wirte_password" className="label">
                        비밀번호 *
                    </label>
                    <div className="input_box password">
                        <input
                            type="password"
                            name="pwd"
                            maxLength="4"
                            value={users.pwd}
                            onChange={onChangeUsers}
                        />
                        <span className="pass_chk">
                            숫자 네자리를 입력하세요.
                        </span>
                    </div>
                </div>
            </div>
            <div className="btn_box">
                <div>
                    <button
                        type="button"
                        className="btn_list"
                        onClick={onClickBtn}
                    >
                        확인
                    </button>
                </div>
            </div>
        </>
    );
};

export default QnAUpdateForm;
