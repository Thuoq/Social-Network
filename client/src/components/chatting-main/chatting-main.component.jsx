import React from 'react';
import {connect} from 'react-redux';
import {
    ChattingMainContainer, 
    ChattingUserContainer,
    SendMessageContainer,
    ChatMessageContainer,

} from './chatting-main.styles';
import {sendMessage} from '../../redux/chatting/chatting.action';
class ChattingMain extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filedChat : "",
        }
    }

    handleChange = e => {
        this.setState({
            filedChat: e.target.value
        })
    }
    handleSendMessage = () => {
        const {sendMessage} = this.props;
        const {filedChat} = this.state;
        sendMessage(filedChat);
        this.setState({filedChat : ""})
    }


    render() {
        const {userChat} = this.props;
        return (
            <ChattingMainContainer >
            {/* heading chat user */}
                <ChattingUserContainer >
                    {
                        userChat ?  (<><img src = {userChat.photoAvatar} alt="pho7"  />
                        <p >{`${userChat.firstName } ${userChat.lastName}`}</p> </>) : <span></span>
                    }
                {/* heading chat user name and pic */}
                
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
                    <textarea id="textarea" value ={this.state.filedChat} onChange ={this.handleChange} placeholder="Send something ..." />
                    <p onClick  = {() => this.handleSendMessage()} id="sendsymbol" >➤</p>
                </SendMessageContainer>
            {/* end of msg box */}
        </ChattingMainContainer>
        )
    }
}


const mapStateToProps = ({chat : {userChat}}) => ({
    userChat, 
})

const mapDispatchToProps = dispatch  => ({
    sendMessage : message => dispatch(sendMessage(message))
})

export default connect(mapStateToProps,mapDispatchToProps)(ChattingMain) ;