import axios from 'axios'
import { url } from '../components/Const'

class UploadService {
    sendFile(file){
        const form = new FormData()
        form.append('file', file)

        return axios.post(`${ url }/upload`, form)
    }   
}

export default new UploadService