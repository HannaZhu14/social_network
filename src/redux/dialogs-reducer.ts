import {ActionsType, DialogPageType,} from './store';

let initialState: DialogPageType = {
    dialogs: [
        {id: 1, name: 'Hanna'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Alisa'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Tom'},
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
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {
                ...state,
                newMessageBody: action.mesBody
            }

        case 'SEND-MESSAGE':
            const newState = {...state}
            let body = newState.newMessageBody
            newState.newMessageBody = '';
            newState.messages.push({id: 1, message: body});
            return newState;
        default :
            return state;
    }
}


export const updateNewMessageBodyAC = (newMessageBody: string) => {
    debugger
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        mesBody: newMessageBody
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}