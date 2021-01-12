import clientAxios from './Axios'

const authToken = (token) => {
    if(token)
    {
        clientAxios.defaults.headers.common['x-auth-token']=token;
    }else
    {
        delete clientAxios.defaults.headers.common['x-auth-token'];
    }
}

export default authToken
