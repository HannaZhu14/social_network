import React, {ChangeEvent} from 'react';
import c from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogsItem';
import {DialogPageType} from '../../redux/store';

type DialogsType = {
    dialogsPage: DialogPageType
    onSendMessageClick: () => void
    onNewMessageChange: (newText: string) => void
}


const Dialogs = (props: DialogsType) => {

    let dialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody


    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.onNewMessageChange(body)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   placeholder={'Enter your message'}
                                   onChange={onNewMessageChange}
                    />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;