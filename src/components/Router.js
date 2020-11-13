/** @format */

import React, { useState } from 'react';
// import SignUp from '../routes/signUp';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../client/Home';
import SignUpComp from '../pages/SignUpComp';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import InfoInput from '../pages/InfoInput';
import MemberModifiy from '../pages/MemberModifiy';
import Board from '../pages/Board/Board';
import QnA from '../pages/Board/QnA';
import QnAWriteForm from '../pages/Board/QnAWriteForm';
import DetailService from '../components/DetailService';
import Public from '../pages/Public';
import D_home from '../pages/D_home'
import Education from '../pages/Education'
import Medical from '../pages/Medical';
import Food from '../pages/Food';

const AppRouter = () => {
    // console.log(isLoggedIn);
    const [user, setUser] = useState(null);
    const logout = () => setUser(null);
    const cureentUser = JSON.parse(sessionStorage.getItem('User'));
    // console.log(logout);
    // const isLogin ?
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home user={user} logout={logout} />
                </Route>

                <Route exact path="/SignUp">
                    <SignUp />
                </Route>

                <Route exact path="/SignUpComp">
                    <SignUpComp />
                </Route>

                <Route exact path="/Login">
                    {/* 아버지    /  아들이 준 데이터를 받음*/}
                    <LogIn
                        onLogin={(loginUser) => {
                            setUser(loginUser);
                        }}
                    />
                </Route>

                <Route exact path="/asd">
                    <InfoInput />
                </Route>

                <Route exact path="/MemberModifiy/">
                    <MemberModifiy cureentUser={cureentUser} />
                </Route>

                <Route exact path="/Board">
                    <Board />
                </Route>

                <Route exact path="/DetailService">
                    <DetailService />
                </Route>

                <Route exact path="/DetailService/Home">
                    <D_home />
                </Route>

                <Route exact path="/DetailService/Public">
                    <Public />
                </Route>
                
                <Route exact path="/DetailService/Education">
                    <Education />
                </Route>

                <Route exact path="/DetailService/Medical">
                    <Medical />
                </Route>

                <Route exact path="/DetailService/Food">
                    <Food />
                </Route>

                <Route exact path="/QnA">
                    <QnA />
                </Route>
                <Route exact path="/QnAWriteForm">
                    <QnAWriteForm />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
