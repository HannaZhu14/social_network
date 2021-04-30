import {ActionsType, RootReduxState} from './redux-store';
import {usersAPI} from '../api/api';
import {Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';

export type UserType = {
    id: number
    photos: { small: null | string, large: null | string }
    followed: boolean
    name: string
    uniqueUrlName: string
    status: string
    location: UserLocationType
}
export type UserLocationType = {
    city: string
    country: string
}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    } else {
                        return u;
                    }
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    } else {
                        return u;
                    }
                })
            };
        case 'SET-USERS' :
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.pageNumber}
        }
        case 'SET-TOTAL-USER-COUNT': {
            return {...state, totalUsersCount: action.count}
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default :
            return state;
    }
};

export const followSuccess = (userID: number) => ({type: 'FOLLOW', userID} as const);

export const unFollowSuccess = (userID: number) => ({type: 'UNFOLLOW', userID} as const);

export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const);

export const setCurrentPages = (pageNumber: number) => ({type: 'SET-CURRENT-PAGE', pageNumber} as const);

export const setUsersTotalCount = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USER-COUNT',
    count: totalUsersCount
} as const);

export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const);

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    isFetching,
    userId
} as const);


type GetStateType = () => RootReduxState
type DispatchType = Dispatch<ActionsType>

export const getUsers = (currentPage: number,
                         pageSize: number): ThunkAction<Promise<void>, RootReduxState, unknown, ActionsType> => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
    }
}


export const follow = (userId: number) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.followUsers(userId)
            .then(data => {
                debugger
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
            })
            .catch((err) => {
                debugger
            })
            .finally(() => {
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.unfollowUsers(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })
    }
}



