import axios from 'axios';

export default axios.create({
    baseURL: 'https://rcfd-react.herokuapp.com/'
})