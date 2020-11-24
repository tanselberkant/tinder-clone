import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://tansel-tinderclone-backend.herokuapp.com'
})

export default instance;