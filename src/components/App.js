import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import axios from 'axios';
const App = () => {
    // const [user , setUser] = useState(null);
    const [call, setCall] = useState(null);
    let URL =
        'http://localhost:8080/SpringFileBoardPR/board/connect.do?name=testkim';
    useEffect(() => {
        const users = async () => {
            try {
                const response = await axios.get(URL);
                setCall(response);
            } catch (error) {
                alert('에러입니다,');
            }
        };
        users();
    }, []);
    console.log(call);
    return (
        <>
            <AppRouter
            // isLoggedIn={user ? true : false}
            // onLogin={(loginUser) => {setUser(loginUser)}}
            />
        </>
    );
};

export default App;
