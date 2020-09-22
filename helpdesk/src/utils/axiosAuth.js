import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    console.log(token);

    return axios.create({
        baseURL: 'https://areallyuniquename.herokuapp.com/api',
        headers: {
            Authorization: token
          }
    });
}