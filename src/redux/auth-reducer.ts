import {ActionsType} from './redux-store';


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
    {type: 'SET-USER-DATA', data: {id, login, email}} as const
);


export default authReducer;


