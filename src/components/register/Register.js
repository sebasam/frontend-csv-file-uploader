import React, { useRef } from "react";
import { url } from './../Const'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import './../../assets/css/register.css'
import { NavLink } from 'react-router-dom';

export const Register = () => {
    let formStyle = {
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: 'repeat(auto-fit, auto)',
        rowGap: '1rem'
    }
    const refEmail = useRef(null)
    const refPassword = useRef(null)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: refEmail.current.value, password: refPassword.current.value })         
        }
        fetch(`${ url }/register`, requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if(data.ok) {
                    Swal.fire(
                        'Done!',
                        'User Created!',
                        'success'
                    ).then(() => {
                        navigate('/')
                    })                    
                } else {
                    Swal.fire(
                        'Ups!!',
                        'Check the fields',
                        'error'
                    )
                }
            })
            .catch(error => {
                Swal.fire(
                    'Ups!!',
                    `${ error }`,
                    'error'
                )
            })
    }

    return (
        <div className='register__container'>
            <h2 className='text-center text-white'>Registrarse</h2>
            <form onSubmit={ handleSubmit } style={ formStyle }>
                <input ref={ refEmail } className='form-control' placeholder='Email' type='email' />
                <input ref={ refPassword } className='form-control' placeholder='Password' type='password' />
                <button type='submit' className='btn btn-success text-white'>Registrar</button>
            </form> 
            <span> <NavLink className='text-white' to='/'>Ya tienes una cuenta? Inicia sesión</NavLink> </span>           
        </div>
    )
}