import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://areallyuniquename.herokuapp.com/api',
        Authorization: token
    });
}