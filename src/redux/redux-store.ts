import {combineReducers, createStore} from 'redux';
import {addPostAC, profileReducer, updateNewPostTextAC} from './profile-reducer';
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from './dialogs-reducer';
import {followAC, setUsersAC, unFollowAC, usersReducer } from './users-reduser';


export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof setUsersAC>


let rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    usersPage: usersReducer
});

export type RootReduxState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);

export default store;
