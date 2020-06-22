import {initialState, reducer} from './reducer';
import * as types from './actions';

it('Should render initial state', () => {
    expect(reducer({initialState}, {})).toEqual({initialState:
        {
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
    })
});

it('Should have state isLoading: true', () => {
    expect(reducer({isLoading: false}, {type: types.START}
    )).toEqual({isLoading: true})
});

it('Should have state isLoading: false', () => {
    expect(reducer({isLoading: true}, {type: types.FAILED}
    )).toEqual({isLoading: false})
});

it('Should store userData on create user', () => {
    expect(reducer({userData: {}},
        {
            type: types.CREATE_USER_SUCCESS,
            payload: {
                id: 1,
                displayName: 'User',
                email: 'user@email.com',
                password: 'password'
            }
        }
    )).toEqual({
        isLoading: false, error: null, userID: 1,
        userData: {
            id: 1,
            displayName: 'User',
            email: 'user@email.com',
            password: 'password'
        }
    })
});

it('Should store userData on logging in', () => {
    expect(reducer({userData: {}},
        {
            type: types.LOGIN_SUCCESS,
            payload: {
                email: 'bob1@gmail.com',
                password: '1234test',
                id: 1
            }
        }
    )).toEqual({
        isLoading: false, error: null, userID: 1,
        userData: {
            id: 1,
            email: 'bob1@gmail.com',
            password: '1234test'
        }
    })
});

it('Should store userTasks', () => {
    expect(reducer({userTasks: {}},
        {
            type: types.GET_TASKS_SUCCESS,
            payload: {name: 'Task 1'}
        }
    )).toEqual({
        isLoading: false, error: null, 
        userTasks: {name: 'Task 1'}
    })
});

it('Should store tasks in filteredTasks', () => {
    expect(reducer({filteredTasks: {}},
        {
            type: types.UPDATE_TASK_FILTERED,
            payload: {name: 'Task 2'}
        }
    )).toEqual({filteredTasks: {name: 'Task 2'}})
});

it('Should store user info in userData', () => {
    expect(reducer({userData: {}},
        {
            type: types.UPDATE_USER_SUCCESS,
            payload: {displayName: 'Batman'}
        }
    )).toEqual({
        isLoading: false, error: null,
        userData: {displayName: 'Batman'}
    })
});

it('Should store taskID when task is created', () => {
    expect(reducer({taskID: null},
        {
            type: types.CREATE_TASK_SUCCESS,
            payload: {name: 'Task 1'},
            id: 1
        }
    )).toEqual({
        isLoading: false, error: null,
        taskID: 1
    })
});

it('Should store date for new task date', () => {
    expect(reducer({date: null},
        {
            type: types.NEW_TASK_DATE,
            payload: 'Today'
        }
    )).toEqual({date: 'Today'})
});

it('Should store data for new start time', () => {
    expect(reducer({start_time: null},
        {
            type: types.NEW_START_TIME,
            payload: '1pm'
        }
    )).toEqual({start_time: '1pm'})
});

it('Should return state to initial state', () => {
    expect(reducer({
        userTasks: [{name: 'Tasks 1'}],
        newTask: {name: 'Task 2'}
    }, {type: types.CLEAR_DATA}
    )).toEqual({userTasks: [], newTask: {}})
});

it('Should return showPW as true', () => {
    expect(reducer({showPW: false}, {type: types.SHOW_PASSWORD}))
    .toEqual({showPW: true})
});

it('Should store data for time period', () => {
    expect(reducer({timePeriod: null},
        {
            type: types.TIME_PERIOD,
            payload: 'today'
        })).toEqual({timePeriod: 'today'})
});

it('Should store data for categories', () => {
    expect(reducer({categories: null},
        {
            type: types.GET_CATEGORY_SUCCESS,
            payload: {name: 'Work'}
        })).toEqual({
            isLoading: false, error:null, 
            categories: {name: 'Work'}})
});