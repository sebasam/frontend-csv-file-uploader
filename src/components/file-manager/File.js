import React, { useState } from "react";
import { FileUpload } from "./FileUpload";
import './../../assets/css/file.css'
import UploadService from "../../services/UploadService";
import Swal from "sweetalert2";
import { ReadFile } from "./ReadFile";

export const File = () => {
    const [file, setFile] = useState()
    const [id, setId] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        UploadService.sendFile(file)
            .then(result => {
                Swal.fire(
                    'Excellent!',
                    'File updated!',
                    'success'
                ).then(() => {
                    window.location.reload()
                })
            })
            .catch(error => {
                Swal.fire(
                    'Ups!!',
                    error,
                    'error'
                )
            })
    }
    return(
        <div className="file__manager-container">
            <div id="logout">
                <button onClick={ (e) => { localStorage.clear() } } className="btn btn-danger m-2">Cerrar sesión</button>
            </div>
            <div className="files-container">
                <div>
                    <h2 className="text-white text-center">Subir archivos .csv</h2>
                    <form onSubmit={ handleSubmit } className="d-grid justify-content-center mt-5">
                        <input onChange={ (e) => { setFile(e.target.files[0]) } } className="form-control" placeholder="File" name='file' type="file" />
                        <button type="submit" className="btn btn-info mt-3">Cargar archivo</button>
                    </form>
                </div>
                <div className="file-names">
                    <FileUpload click={ (e) => { setId(e.target.getAttribute('data-key')) } } />
                </div>
            </div>
            <div className="files__read">
                <ReadFile myId={ id } />
            </div>
        </div>
    )
}