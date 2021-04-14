import { ActionsType } from "./redux-store";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type InitialStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: 'Hanna'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Alisa'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are u'},
        {id: 3, message: 'yo'},
    ] as Array<MessageType>,
    newMessageBody: ''
};

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {
                ...state,
                newMessageBody: action.mesBody
            };
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 1, message: body}]
            };
        default :
            return state;
    }
};

export const updateNewMessageBody = (newMessageBody: string) => (
    {type: 'UPDATE-NEW-MESSAGE-BODY', mesBody: newMessageBody} as const
);

export const sendMessage = () => (
    {type: 'SEND-MESSAGE'} as const
);