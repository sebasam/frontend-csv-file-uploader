import React, { useRef } from "react";
import { url } from './../Const'
import Swal from "sweetalert2";
import './../../assets/css/login.css'
import { NavLink } from 'react-router-dom';

export const Login = () => {
    const refEmail = useRef(null)
    const refPassword = useRef(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: refEmail.current.value, password: refPassword.current.value })
        }
        fetch(`${ url }/login`, requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if(data.ok){
                    Swal.fire(
                        'Done!',
                        `${ data.msg }`,
                        'success'
                    ).then(() => {
                        localStorage.setItem('token', data.token)
                        window.location.reload()
                    })
                }else{
                    Swal.fire(
                        'Ups!!',
                        'Check the fields',
                        'error'
                    )
                }
            })
            .catch((error) => {
                Swal.fire(
                    'Ups!!',
                    `${ error }`,
                    'error'
                )
            }
            )
    }
    return(
        <div className="container-fluid login__container">
            <div className="">
                <h2 className="text-center text-white">Login</h2>
                <form onSubmit={ handleSubmit } className="form">
                    <input ref={ refEmail } className="form-control" placeholder="Email" type='email' />
                    <input ref={ refPassword } className="form-control" placeholder="Password" type='password' />
                    <button type="submit" className="btn btn-success text-white">Iniciar Sesión</button>
                </form>
                <span> <NavLink className='text-white' to='/register'>No tienes una cuenta? Regístrate</NavLink> </span>
            </div>
        </div>
    )
}