import React, { useState } from 'react'
import { useEffect } from 'react';
import Admin from './Admin/Admin'
import Sidebar from './Admin/sidebar/Sidebar'
import Login from './Login/Login'

export default function Main() {

    const[isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        const token = localStorage.getItem('hamrovet-admin-token');
        if(token){
            setIsLoggedIn(true);
        }
    },[])
    return (
        <div>
            {isLoggedIn?
            <Admin/>:
            <Login onLogin={()=>{setIsLoggedIn(true)}}/>
}
        </div>
    )
}
