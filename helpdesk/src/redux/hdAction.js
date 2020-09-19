import axios from 'axios';


export const userLogin = (user) => dispatch => {
    dispatch({type: 'USER_LOGIN'});
    axios.post('https://areallyuniquename.herokuapp.com/api/users/login',user)
    .then(res => {
        dispatch({type: 'LOGIN_SUCCSESS', payload: res.data});
        localStorage.setItem('token', res.data.payload);
    })
    .catch(er => {
        dispatch({type: 'LOGIN_FAIL', payload: 'incorrect username and password combination'})
    })

}


export const regUser = (newUser) => dispatch => {
   axios.post('',newUser)
   .then(res => {
    dispatch({type: 'CREATE_USER', payload: newUser.username})
   })
   .catch(er => {
       console.log(er);
   });
}