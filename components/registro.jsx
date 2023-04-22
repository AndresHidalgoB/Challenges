import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { registerAuth } from '../store/slices/Thunks';
import { auth } from '../firebase/config';
import { logout, register } from '../store/slices/AuthSlice';

export default function Registro() {
    const dispath = useDispatch();

    const { email, password, onInputChange, formState } = useForm({
        email: 'mrgaturus@gmail.com',
        password: '1324'
    });

    useEffect(
        () => {
            onAuthStateChanged(auth, async(user) => {
                if (!user) return dispath( logout() );
                
                dispath( register( { email: user.email }) );
            });
        }
    )

    const submitCB = (e) => {
        e.preventDefault();
        console.log(formState);
        dispath( registerAuth(email, password) );
    };

    return (
        <>
            <h1>Registro</h1>
            <hr />
            <form onSubmit={submitCB}>
                <input type="email" name="email" onChange={onInputChange} value={email} />
                <input type="password" name="password" onChange={onInputChange} value={password} />

                <button type="submit">Registro</button>
            </form>
        </>
    )
}