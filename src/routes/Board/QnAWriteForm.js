import { Link } from '@material-ui/core';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../css/QnAWriteForm.css';
import { useHistory } from 'react-router-dom';

const QnAWriteForm = () => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [titls, settitle] = useState('');
    const [edit, setEdit] = useState('');
    const [password, setPassword] = useState('');

    const onchangePhone = (e) => {
        setPhone(e.target.value);
    };
    const onchangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onchangeTitle = (e) => {
        settitle(e.target.value);
    };
    const onchangeEdit = (e) => {
        setEdit(e.target.value);
    };
    const onchangePassword = (e) => {
        setPassword(e.target.value);
    };

    console.log(phone, email, titls, edit, password);
    const history = useHistory();
    const onClickBtn = () => {
        alert('???????.');
        history.push('/QnA');
    };
    return (
        <>
            <Navbar />
            <div className="sub_visual sub_visual06">
                <div className="inner">
                    <h2>Q & A</h2>
                    <ul className="sub_tab">
                        <li>
                            <Link to="/Board">????</Link>
                        </li>

                        <li className="on">
                            <Link to="/QnA">Q & A</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <h3 className="qna_tit">????</h3>

            <p className="qna_txt">
                '???? ???? ??? ??? ?????. '
            </p>
            <div className="QnA_write_form write_praise">
                <div className="row">
                    <label htmlFor="wirte_phone" className="label">
                        ??? *
                    </label>
                    <div className="input_box phone">
                        <div className="phone_input">
                            <input
                                type="tel"
                                name="b_Mobil1"
                                value=""
                                maxLength="3"
                                onChange={onchangePhone}
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
                                name="b_email"
                                value=""
                                maxLength="50"
                                onChange={onchangeEmail}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="wirte_title" className="label">
                        ?? *
                    </label>
                    <div className="input_box title">
                        <input
                            type="text"
                            name="b_title"
                            maxLength="100"
                            onChange={onchangeTitle}
                        />
                    </div>
                </div>
                <div className="row contents">
                    <label htmlFor="wirte_edit" className="label">
                        ?? *
                    </label>
                    <div className="input_box">
                        <textarea
                            className="ckeditor"
                            id="b_text"
                            name="b_text"
                            onChange={onchangeEdit}
                        ></textarea>
                    </div>
                </div>

                <div className="row">
                    <label htmlFor="wirte_password" className="label">
                        ???? *
                    </label>
                    <div className="input_box password">
                        <input
                            type="password"
                            name="b_pass"
                            maxLength="4"
                            onChange={onchangePassword}
                        />
                        <span className="pass_chk">
                            ?? ???? ?????.
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
                        ??
                    </button>
                </div>
            </div>
        </>
    );
};

export default QnAWriteForm;
