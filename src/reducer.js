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
  UPDATE_TASK_START,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILED,
  UPDATE_TASK_FILTERED,
  DELETE_TASK_START,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILED,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  NEW_TASK_DATE,
  NEW_START_TIME,
  NEW_END_TIME,
  CREATE_TASK_START,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILED,
  CLEAR_DATA,
  SHOW_PASSWORD,
  TIME_PERIOD,
  ADD_CATEGORY_FAILED,
  ADD_CATEGORY_START,
  ADD_CATEGORY_SUCCESS,
  GET_CATEGORY_START,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED
} from "./actions.js";

// const dummyTasks = [
//   {
//     name: 'Go to the grocery store.',
//     date: '11/13/2019',
//     task_icon: '<i id="icon" className="fas fa-shopping-cart icon"></i>',
//     start_time: '9am',
//     end_time: '11am',
//     status: false,
//   },
//   {
//     name: 'Work out.',
//     date: '11/21/2019',
//     task_icon: '<i id="icon" className="fas fa-heartbeat icon"></i>',
//     start_time: '1pm',
//     end_time: '2pm',
//     status: false,
//   },
//   {
//     name: 'Work out.',
//     date: '11/20/2019',
//     task_icon: '<i id="icon" className="fas fa-heartbeat icon"></i>',
//     start_time: '1pm',
//     end_time: '2pm',
//     status: false,
//   },
//   {
//     name: 'Work out.',
//     date: '11/21/2019',
//     task_icon: '<i id="icon" className="fas fa-heartbeat icon"></i>',
//     start_time: '1pm',
//     end_time: '2pm',
//     status: false,
//   },
//   {
//     name: 'Work out.',
//     date: '11/8/2019',
//     task_icon: '<i id="icon" className="fas fa-heartbeat icon"></i>',
//     start_time: '1:00 pm',
//     end_time: '2:00 pm',
//     status: true,
//   },
//   {
//     name: 'Work out.',
//     date: '11/20/2019',
//     task_icon: '<i id="icon" className="fas fa-heartbeat icon"></i>',
//     start_time: '1pm',
//     end_time: '2pm',
//     status: false,
//   },
// ]

const initialState = {
  isLoading: false,
  error: null,
  errorStatus: null,
  userData: {},
  userTasks: [],
  filteredTasks: [],
  userID: null,
  date: '',
  start_time: '',
  end_time: '',
  newTask: {},
  showPW: false,
  timePeriod: 'Today',
  categories:[]
}
//2019-11-22T00:00:00.000Z
export function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case CREATE_USER_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        userData: action.payload,
        userID: action.payload.id,
        error: null
      };
    }
    case CREATE_USER_FAILED: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    case LOGIN_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case LOGIN_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        userData: action.payload,
        userID: action.payload.id,
        error: null
      };
    }
    case LOGIN_FAILED: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      };
    }
    case GET_TASKS_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_TASKS_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: null,
        userTasks: action.payload
      };
    }
    case GET_TASKS_FAILED: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: action.payload.data.message,
        errorStatus: action.payload.status
      };
    }
    case UPDATE_TASK_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case UPDATE_TASK_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }
    case UPDATE_TASK_FAILED: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      };
    }
    case DELETE_TASK_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case DELETE_TASK_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }
    case DELETE_TASK_FAILED: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      };
    }
    case UPDATE_TASK_FILTERED: {
      return {
        ...state,
        filteredTasks: action.payload
      };
    }
    case UPDATE_USER_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case UPDATE_USER_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: null,
        userData: action.payload
      };
    }
    case UPDATE_USER_FAILED: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      };
    }
    case CREATE_TASK_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case CREATE_TASK_SUCCESS: {
      console.log('New Task', action.payload, action.id);
      return {
        ...state,
        isLoading: false,
        taskID: action.id,
        error: null
      };
    }
    case CREATE_TASK_FAILED: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      };
    }
    case NEW_TASK_DATE: {
      // console.log(action.payload);
      return {
        ...state,
        date: action.payload
      };
    }
    case NEW_START_TIME: {
      console.log(action.payload);
      return {
        ...state,
        start_time: action.payload
      };
    }
    case NEW_END_TIME: {
      console.log(action.payload);
      return {
        ...state,
        end_time: action.payload
      };
    }
    case CLEAR_DATA: {
      return {
        ...state,
        userTasks: [],
        newTask: {}
      };
    }
    case SHOW_PASSWORD: {
      return {
        ...state, 
        showPW: !state.showPW
      }
    }
    case TIME_PERIOD: {
      return {
        ...state,
        timePeriod: action.payload
      }
    }
    case ADD_CATEGORY_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case ADD_CATEGORY_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: null
      };
    }
    case ADD_CATEGORY_FAILED: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: action.payload.data.message,
        errorStatus: action.payload.status
      };
    }
    case GET_CATEGORY_START: {
      return {
        ...state,
        isLoading: true
      }
    }
    case GET_CATEGORY_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: null,
        categories: action.payload
      }
    }
    case GET_CATEGORY_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.data.message,
        errorStatus: action.payload.status
      }
    }    
    default:
      return state;
  }
}