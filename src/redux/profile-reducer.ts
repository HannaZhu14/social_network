import {ActionsType} from './redux-store'


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: UserProfileType | null

}

let initialState: InitialStateType = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are u?',
            likesCount: 20
        },
        {
            id: 2,
            message: 'I love u !!!',
            likesCount: 53
        }
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            };
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        default :
            return state;
    }
};

export const addPost = (newPostText: string) => (
    {type: 'ADD-POST', postMessage: newPostText} as const
);
export const updateNewPostText = (newText: string) => (
    {type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const
);

export const setUserProfile = (profile: UserProfileType | null) => (
    {type: 'SET-USER-PROFILE', profile} as const
);

