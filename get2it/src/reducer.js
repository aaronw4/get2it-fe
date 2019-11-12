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

const dummyTasks = [
  {
    name: 'Go to the grocery store.',
    date: '11/10/2019',
    task_icon: '<i id="icon" className="fas fa-shopping-cart icon"></i>',
    start_time: '9am',
    end_time: '11am',
  },
  {
    name: 'Work out.',
    date: '11/10/2019',
    task_icon: '<i id="icon" className="fas fa-heartbeat icon"></i>',
    start_time: '1pm',
    end_time: '2pm',
  },
  {
    name: 'Work out.',
    date: '11/9/2019',
    task_icon: '<i id="icon" className="fas fa-heartbeat icon"></i>',
    start_time: '1pm',
    end_time: '2pm',
  },
  {
    name: 'Work out.',
    date: '11/8/2019',
    task_icon: '<i id="icon" className="fas fa-heartbeat icon"></i>',
    start_time: '1pm',
    end_time: '2pm',
  },
]

const initialState = {
  isLoading: false,
  error: null,
  userData: {},
  userTasks: dummyTasks,
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
        userData: action.payload,
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
        userData: action.payload,
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