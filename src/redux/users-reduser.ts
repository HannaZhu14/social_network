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
}

let initialState: InitialStateType = {
    users: []
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
            };
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
            return {
                ...state,
                users: [...state.users, ...action.users]
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



