import {ActionsType} from './redux-store'


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
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
    newPostText: ''
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
        default :
            return state;
    }
};

export const addPostAC = (newPostText: string) => (
    {type: 'ADD-POST', postMessage: newPostText} as const
);
export const updateNewPostTextAC = (newText: string) => (
    {type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const
);

