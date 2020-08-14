import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectSocketClient} from '../../redux/socket/socket.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectUserChat} from '../../redux/chatting/chatting.selector';
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

    componentDidMount() {
        const {socketClient,currentUser} = this.props;
        

        // LISTEN USER 
        const userSocket = Object.assign({},currentUser);
        userSocket.name =`${userSocket.firstName} ${userSocket.lastName}`
        userSocket.sex = undefined;
        userSocket.photoAvatar = undefined;
        userSocket.language = undefined;
        userSocket.firstName = undefined;
        userSocket.lastName = undefined;
        userSocket.email = undefined;
        userSocket.birthDay = undefined;
        userSocket.photoProfile = undefined;
        userSocket.hobby = undefined;
        userSocket.school = undefined;
        socketClient.emit("USER__CONNECTED",userSocket);


        socketClient.on("SEND_MESSAGE_USER_RECEIVED",message => {
		const node = document.createElement('div');
        const paragraph = document.createElement('p');
        const divNode = document.getElementById('box-message');
        const textMessage  = document.createTextNode(message);
        node.className = "received";
        paragraph.appendChild(textMessage);
        node.appendChild(paragraph)
        divNode.insertBefore(node,divNode.childNodes[0]);
        })
        

        // 
        
     }  

    handleChange = e => {
        this.setState({
            filedChat: e.target.value
        })
    }
    handleSendMessage = () => {
        const {socketClient,currentUser,userChat} = this.props;
        const {filedChat} = this.state;
        const node = document.createElement('div');
        const paragraph = document.createElement('p');
        const divNode = document.getElementById('box-message');
        const textMessage  = document.createTextNode(filedChat);
        node.className = "send";
        paragraph.appendChild(textMessage);
        node.appendChild(paragraph)
        divNode.insertBefore(node,divNode.childNodes[0]);

        const newMessage = Object.assign({} , {
            textMessage : filedChat,
            idSend: currentUser._id,
            idReceive: userChat._id,
            createAt  : new Date()
        })
        this.setState({filedChat : ""});
        socketClient.emit("USER_SEND_MESSAGE",newMessage)
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
                <ChatMessageContainer  id="box-message">
                    {/* <div className="received">
                        <p>Hello</p>
                    </div>
                    <div className="send">
                        <p>Hi!</p>
                    </div>
                    <div className="received">
                        <p>How are you?</p>
                    </div> */}
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
 //selectSocketClient selectCurrentUser
const mapStateToProps = createStructuredSelector({
    userChat : selectUserChat,
    socketClient: selectSocketClient,
    currentUser: selectCurrentUser
})


const mapDispatchToProps = dispatch  => ({
    sendMessage : message => dispatch(sendMessage(message))
})

export default connect(mapStateToProps,mapDispatchToProps)(ChattingMain) ;