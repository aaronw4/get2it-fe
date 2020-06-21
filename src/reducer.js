import {
  START,
  CREATE_USER_SUCCESS,
  FAILED,
  LOGIN_SUCCESS,
  GET_TASKS_SUCCESS,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FILTERED,
  DELETE_TASK_SUCCESS,
  UPDATE_USER_SUCCESS,
  NEW_TASK_DATE,
  NEW_START_TIME,
  NEW_END_TIME,
  CREATE_TASK_SUCCESS,
  CLEAR_DATA,
  SHOW_PASSWORD,
  TIME_PERIOD,
  ADD_CATEGORY_SUCCESS,
  GET_CATEGORY_SUCCESS,
} from "./actions.js";

export const initialState = {
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
    case START: {
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
    case FAILED: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: action.payload
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
    case GET_TASKS_SUCCESS: {
      console.log('Tasks', action.payload);
      return {
        ...state,
        isLoading: false,
        error: null,
        userTasks: action.payload
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
    case DELETE_TASK_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }
    case UPDATE_TASK_FILTERED: {
      return {
        ...state,
        filteredTasks: action.payload
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
    case CREATE_TASK_SUCCESS: {
      console.log('New Task', action.payload, action.id);
      return {
        ...state,
        isLoading: false,
        taskID: action.id,
        error: null
      };
    }
    case NEW_TASK_DATE: {
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
    case ADD_CATEGORY_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: null
      };
    }
    case GET_CATEGORY_SUCCESS: {
      console.log('Categories', action.payload);
      return {
        ...state,
        isLoading: false,
        error: null,
        categories: action.payload
      }
    }
    default:
      return state;
  }
}