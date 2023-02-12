import React from "react";
import { FileUpload } from "./FileUpload";
import './../../assets/css/file.css'

export const File = () => {
    return(
        <div className="file__manager-container">
            <div id="logout">
                <button className="btn btn-danger m-2">Cerrar sesión</button>
            </div>
            <div className="files-container">
                <div>
                    <h2 className="text-white text-center">Subir archivos .csv</h2>
                    <form className="d-grid justify-content-center mt-5">
                        <input className="form-control" placeholder="File" type="file" />
                        <button className="btn btn-info mt-3">Cargar archivo</button>
                    </form>
                </div>
                <div className="file-names">
                    <FileUpload />
                </div>
            </div>
        </div>
    )
}