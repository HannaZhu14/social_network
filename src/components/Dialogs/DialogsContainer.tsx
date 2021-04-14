import {InitialStateType, sendMessage, updateNewMessageBody} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootReduxState} from '../../redux/redux-store';

type mapStateToPropsType = {
    dialogsPage: InitialStateType
}
type mapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (text: string) => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootReduxState): mapStateToPropsType => {
    return {
        dialogsPage: state.DialogsPage
    }
}

let dispatch:mapDispatchToPropsType = {sendMessage, updateNewMessageBody}

const DialogsContainer = connect(mapStateToProps, dispatch)(Dialogs);

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
