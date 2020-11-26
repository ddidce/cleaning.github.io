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
import BoardDetail from '../pages/Board/BoardDetail';
import QnA from '../pages/Board/QnA';
import QnADetail from '../pages/Board/QnADetail';
import QnAWriteForm from '../pages/Board/QnAWriteForm';
import ReservationConfirm from '../pages/ReservationConfirm/ReservationConfirm';
import QnAUpdateForm from '../pages/Board/QnAUpdateForm';

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

                {/* <Route exact path="/asd">
                    <InfoInput />
                </Route> */}

                <Route exact path="/MemberModifiy">
                    <MemberModifiy cureentUser={cureentUser} logout={logout} />
                </Route>

                <Route path="/ReservationConfirm">
                    <ReservationConfirm logout={logout} />
                </Route>

                <Route exact path="/Board">
                    <Board logout={logout} />
                </Route>

                <Route
                    exact
                    path="/BoardDetail/:num"
                    render={(props) => (
                        <BoardDetail
                            logout={logout}
                            // 렌더할때 BoardInfo에서 세팅해둔 값을
                            // props.location으로 받음
                            routeProps={props}
                        />
                    )}
                ></Route>
                <Route exact path="/QnA">
                    <QnA logout={logout} />
                </Route>

                <Route exact path="/QnAWriteForm">
                    <QnAWriteForm logout={logout} />
                </Route>
                <Route
                    exact
                    path="/QnADetail/:seq"
                    render={(props) => (
                        <QnADetail logout={logout} routeProps={props} />
                    )}
                ></Route>

                <Route
                    exact
                    path="/QnAUpdateForm/:seq"
                    render={(props) => (
                        <QnAUpdateForm logout={logout} routeProps={props} />
                    )}
                ></Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
