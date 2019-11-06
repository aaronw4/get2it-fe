import axios from 'axios'

export const CREATE_USER_START = 'CREATE_USER_START'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED'



export function createUser(username, password) {
  return (dispatch) => {
    dispatch({ type: CREATE_USER_START })

    return axios.post('https://get2it.herokuapp.com/api/auth/register', { username, password })
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        dispatch({ type: CREATE_USER_SUCCESS })
      })
      .catch((err) => {
        const payload = err.response ? err.response.data : err
        dispatch({ type: CREATE_USER_FAILED, payload })
      })
  }
}