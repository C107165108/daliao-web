import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import 'antd/dist/antd.css';
import { Input } from 'antd';

import { auth } from '../../firebase-config'
import 'firebase/auth';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

export default function LogInPage(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const { setUser, user } = props;

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const onSubmit = async () => {

        try {
            const user = await signInWithEmailAndPassword(
                auth, email, password
            );
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }

    const logOut = async () => {
        await signOut(auth)
        console.log(user)
    }



    return (
        <div style={{ width: 300 }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Input placeholder='信箱' type='email' onChange={(e) => { setEmail(e.target.value) }}></Input>
            <br />
            <Input placeholder='密碼' type='password' onChange={(e) => { setPassword(e.target.value) }}></Input>
            <br />
            <button onClick={onSubmit}>登入</button>

            <button onClick={logOut}>登出</button>
            <h1> {user?.email} </h1>
        </div>
    );
}