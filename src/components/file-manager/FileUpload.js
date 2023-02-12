import React, { useEffect, useState } from "react";
import { url } from './../Const'
import './../../assets/css/file-upload.css'

export const FileUpload = (props) => {
    const [files, setFiles] = useState([])
    const getFiles = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(`${ url }/files`, requestOptions)
            .then(res => res.json())
            .then(data => {
                setFiles(data.files)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getFiles()
    }, [])
    return(
        <div>
            {
                files.map(data => {
                    return <span className="text-white mt-3"> { data.name } </span>
                })
            }
        </div>
    )
}