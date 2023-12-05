import React from 'react'
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from './Messages'
import Input from './Input'

function Chat() {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>test 2</span>

            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat