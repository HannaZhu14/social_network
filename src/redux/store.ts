import {addPostAC, updateNewPostTextAC,} from './profile-reducer';
import { sendMessageAC, updateNewMessageBodyAC} from './dialogs-reducer';


export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type RootStateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogPageType
    sidebar: {}
}
export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>


// export const addPostAC = (newPostText: string) => {
//     return {
//         type: 'ADD-POST',
//         postMessage: newPostText
//     } as const
// }
// export const updateNewPostTextActionTypeAC = (newText: string) => {
//     return {
//         type: 'UPDATE-NEW-POST-TEXT',
//         newText: newText
//     } as const
// }
// export const updateNewMessageBodyAC = (newMessageBody: string) => {
//     return {
//         type: 'UPDATE-NEW-MESSAGE-BODY',
//         mesBody: newMessageBody
//     } as const
// }
// export const sendMessageAC = () => {
//     return {
//         type: 'SEND-MESSAGE'
//     } as const
// }


const store: StoreType = {
    _state: {
        ProfilePage: {
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
        },
        DialogsPage: {
            dialogs: [
                {id: 1, name: 'Hanna'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Alisa'},
                {id: 4, name: 'Dima'},
                //             {id: 5, name: 'Tom'},
                {id: 6, name: 'Ada'},
                {id: 7, name: 'Mile'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are u'},
                {id: 3, message: 'yo'},
                {id: 4, message: 'I love u'},
            ],
            newMessageBody: ''
        },
        sidebar: {},
    },
    _onChange() {
        console.log('state changed');
    },

    subscribe(observer: () => void) {
        this._onChange = observer
    },
    getState() {
        return this._state;
    },

    // addPost(postMessage: string) {
    //     let newPost: PostType = {
    //         id: new Date().getTime(),
    //         message: postMessage,
    //         likesCount: 0
    //     }
    //     this._state.ProfilePage.posts.push(newPost);
    //     this._state.ProfilePage.newPostText = '';
    //     this._onChange()
    // },
    // updateNewPostText(newText: string) {
    //     this._state.ProfilePage.newPostText = newText;
    //     this._onChange()
    // },

    dispatch(action) {  // { type: 'ADD-POST' }

        // this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        // this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._onChange()

        // if (action.type === 'ADD-POST') {
        //     let newPost: PostType = {
        //         id: new Date().getTime(),
        //         message: action.postMessage, //  то что в параметрах было у ф-ции addPost
        //         likesCount: 0
        //     }
        //     this._state.ProfilePage.posts.push(newPost);
        //     this._state.ProfilePage.newPostText = '';
        //     this._onChange()
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.ProfilePage.newPostText = action.newText;
        //     this._onChange()
        // } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
        //     this._state.DialogsPage.newMessageBody = action.mesBody
        //     this._onChange()
        // } else if (action.type === 'SEND-MESSAGE') {
        //     let body = this._state.DialogsPage.newMessageBody
        //     this._state.DialogsPage.newMessageBody = '';
        //     this._state.DialogsPage.messages.push({id: 1, message: body})
        //     this._onChange()
        // }
    }
}

// window.store = store;

// store - OOP