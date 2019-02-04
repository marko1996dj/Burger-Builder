import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://burger-builder-f1606.firebaseio.com/'
});

export default instance;