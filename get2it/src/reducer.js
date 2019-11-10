import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_ACCOUNT_START,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAILED,

} from './actions.js'

const initialState = {
  isLoading: false,
  error: null,
  userData: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case CREATE_USER_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: null,
      }
    }
    case CREATE_USER_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    }
    case LOGIN_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case LOGIN_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: null,
      }
    }
    case LOGIN_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    }
    case GET_ACCOUNT_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case GET_ACCOUNT_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: null,
        userData: action.payload
      }
    }
    case GET_ACCOUNT_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    }
    default:
      return state
  }
}