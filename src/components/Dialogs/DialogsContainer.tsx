import {ActionsType, RootStateType} from '../../redux/store';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state: RootStateType) => { // этот объект настраивает св-ва , которые мы возьмем из стейта
    return {
        dialogsPage: state.DialogsPage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {// этот объект настраивает коллбэки , которые мы будем отправлять в презинтационную компоненту
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageAC())
        },
        onNewMessageChange: (text: string) => {
            dispatch(updateNewMessageBodyAC(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;


























// type DialogsContainerType = {
//     // store: StoreType
// }

// const DialogsContainer = (props: DialogsContainerType) => {
//
//     // let dialogsPage = props.store.getState().DialogsPage
//     //
//     //
//     // let onSendMessageClick = () => {
//     //     let action = sendMessageAC()
//     //     props.store.dispatch(action)
//     // }
//     //
//     // let onNewMessageChange = (text: string) => {
//     //
//     //     let action = updateNewMessageBodyAC(text)
//     //     props.store.dispatch(action);
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//
//                 let dialogsPage = store.getState().DialogsPage;
//
//                 const onSendMessageClick = () => {
//                     let action = sendMessageAC()
//                     store.dispatch(action)
//                 }
//
//                 const onNewMessageChange = (text: string) => {
//                     let action = updateNewMessageBodyAC(text)
//                     store.dispatch(action);
//                 }
//
//                 return <Dialogs dialogsPage={dialogsPage}
//                                 onSendMessageClick={onSendMessageClick}
//                                 onNewMessageChange={onNewMessageChange}
//                 />
//             }
//
//             }
//         </StoreContext.Consumer>
//         // <Dialogs dialogsPage={dialogsPage}
//         //          onSendMessageClick={onSendMessageClick}
//         //          onNewMessageChange={onNewMessageChange}/>
//     );
