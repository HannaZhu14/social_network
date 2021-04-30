import {applyMiddleware, combineReducers, createStore} from 'redux';
import {addPost, profileReducer, setUserProfile, updateNewPostText} from './profile-reducer';
import {dialogsReducer, sendMessage, updateNewMessageBody} from './dialogs-reducer';
import {
    followSuccess,
    setCurrentPages,
    setUsers,
    setUsersTotalCount, toggleIsFetching, toggleIsFollowingProgress,
    unFollowSuccess,
    usersReducer
} from './users-reduser';
import authReducer, {setAuthUserData} from './auth-reducer';
import thunkMiddleware from 'redux-thunk'


export type ActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof updateNewMessageBody>
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPages>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleIsFollowingProgress>


let rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export type RootReduxState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store

export default store;
