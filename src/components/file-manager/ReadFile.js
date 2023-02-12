import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../Const";
import './../../assets/css/read-file.css'

export const ReadFile = (props) => {
    const [file, setFile] = useState([])
    const [id, setId] = useState('')
    const [showFile, setShow] = useState(false)
    const navigate = useNavigate()
    
    const getFileById = (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'GET',
            Headers: {
                'Content-Type': "application/json"
            }
        }
        fetch(`${ url }/files/${ id }`, requestOptions)
            .then(res => res.json())
            .then(data => {
                setShow(true) 
                setFile(data.file[0].data)                
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        setId(props.myId)
    }, [props.myId])

    useEffect(() => {
        if(localStorage.length < 1){
            navigate('/')
        }
    })

    return(
        <div className="data">
            <form className="read__form mt-5" onSubmit={ getFileById }>
                <input value={ id } className="form-control" type="text" placeholder="ID archivo" />
                <button type="submit" className="btn btn-success mt-3">Ver archivo</button>
            </form>
            <div>
            {
                file.map(data => {
                    if(showFile){
                        console.log(data)
                    }
                })
            }
            </div>          
        </div>  
        
    )
}