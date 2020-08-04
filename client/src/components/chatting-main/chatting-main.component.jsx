import React from 'react'
import {
    ChattingMainContainer, 
    ChattingUserContainer,
    SendMessageContainer,
    ChatMessageContainer,

} from './chatting-main.styles';

const ChattingMain = () => {
    return (
        <ChattingMainContainer >
        {/* heading chat user */}
            <ChattingUserContainer >
            {/* heading chat user name and pic */}
                <img src="/images/001-photographer.png" alt="pho7"  />
                <p >Hien SamBi</p>
            </ChattingUserContainer>
            {/* End of chat user heading */}
            {/* chat msg start */}
            <ChatMessageContainer >
                <div className="received">
                    <p>Hello</p>
                </div>
                <div className="send">
                    <p>Hi!</p>
                </div>
                <div className="received">
                    <p>How are you?</p>
                </div>
            </ChatMessageContainer>
            {/* End of chat msg */}
            {/* to send msg box and button */}
            <SendMessageContainer >
                <textarea id="textarea" defaultValue={""} />
                <p id="sendsymbol" >➤</p>
            </SendMessageContainer>
        {/* end of msg box */}
      </ChattingMainContainer>
    )
}
export default ChattingMain;