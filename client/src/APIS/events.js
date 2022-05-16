import axios from 'axios';

let baseURL
if (process.env.NODE_ENV === "production") {
    baseURL= 'https://rcfd-react.herokuapp.com/'
} else {
    baseURL= 'http://localhost:3001'
}

export default axios.create({
    baseURL
})