import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import axios from 'axios';
const App = () => {
    // const [user , setUser] = useState(null);

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
