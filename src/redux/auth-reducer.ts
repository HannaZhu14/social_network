import {ActionsType} from './redux-store';
import {authAPI} from '../api/api';
import {Dispatch} from 'redux';


export type InitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}
let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default :
            return state;
    }
};

export const setAuthUserData = (id: null | number, email: null | string, login: null | string) => (
    {type: 'SET-USER-DATA', data: {id, email,login}} as const
);

type DispatchType = Dispatch<ActionsType>

export const getAuthUserData = () => (dispatch:DispatchType) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}


export default authReducer;


