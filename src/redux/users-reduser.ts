import {ActionsType, UsersPageType} from './store'


let initialState: UsersPageType = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbTeW6ZigluoWxAPFoKzVghKEMTRjpxRRog&usqp=CAU',
        //     followed: true,
        //     fullName: 'Anna',
        //     status: 'I am developer',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://vk-wiki.ru/wp-content/uploads/2019/04/male-user-profile-picture.png',
        //     followed: false,
        //     fullName: 'Sasha',
        //     status: 'I am perfect',
        //     location: {city: 'Mockow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://habrastorage.org/webt/5b/db/fe/5bdbfe8c54bc4130948080.jpeg',
        //     followed: true,
        //     fullName: 'Alisa',
        //     status: 'Pretty girl',
        //     location: {city: 'Kiew', country: 'Ukraine'}
        // },
    ]
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType) => {

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
}


export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}
export const unFollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}

export const setUsersAC = (users: any) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}



