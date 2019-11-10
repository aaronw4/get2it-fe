import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_TASKS_START,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILED,

} from './actions.js'

const initialState = {
  isLoading: false,
  error: null,
  userTasks: [],
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
    case GET_TASKS_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case GET_TASKS_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: null,
        userTasks: action.payload
      }
    }
    case GET_TASKS_FAILED: {
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