import { ActionsType } from "./redux-store";

export type UserType = {
    id: number
    photos: {small: null | string, large: null | string}
    followed: boolean
    name: string
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
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        default :
            return state;
    }
};

export const followAC = (userID: number) => (
    {type: 'FOLLOW', userID} as const
);

export const unFollowAC = (userID: number) => (
    {type: 'UNFOLLOW', userID} as const
);

export const setUsersAC = (users: Array<UserType>) => (
    {type: 'SET-USERS', users} as const
);

export const setCurrentPagesAC = (pageNumber: number) => (
    {type: 'SET-CURRENT-PAGE', pageNumber} as const
);

export const setUsersTotalCountAC = (totalUsersCount: number) => (
    {type: 'SET-TOTAL-USER-COUNT', count: totalUsersCount} as const
);

export const toggleIsFetchingAC = (isFetching: boolean) => (
    {type: 'TOGGLE-IS-FETCHING', isFetching} as const
);


