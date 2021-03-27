import {ActionsType, PostType, ProfilePageType} from './store';

let initialState: ProfilePageType = {
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

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        postMessage: newPostText
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage, //  то что в параметрах было у ф-ции addPost
                likesCount: 0
            }
            const newState = {...state}
            newState.posts.push(newPost);
            newState.newPostText = ''
            return newState
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        default :
            return state;
    }

}

