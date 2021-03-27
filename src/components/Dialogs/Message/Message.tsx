import React, {RefObject} from 'react';
import c from './../Dialogs.module.css';

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {


    return (
        <div className={c.message}>
            {props.message}
        </div>
    );
}

export default Message;