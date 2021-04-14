import {combineReducers, createStore} from 'redux';
import {addPost, profileReducer, setUserProfile, updateNewPostText} from './profile-reducer';
import {dialogsReducer, sendMessage, updateNewMessageBody} from './dialogs-reducer';
import {
    follow,
    setCurrentPages,
    setUsers,
    setUsersTotalCount, toggleIsFetching,
    unFollow,
    usersReducer
} from './users-reduser';
import authReducer, {setAuthUserData} from './auth-reducer';


export type ActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof updateNewMessageBody>
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof follow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPages>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>




let rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth:authReducer
});

export type RootReduxState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);

export default store;
