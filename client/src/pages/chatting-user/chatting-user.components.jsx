import React from 'react';
import {ChattingWrapperContainer} from './chatting-user.styles';
import ChattingMain from '../../components/chatting-main/chatting-main.component';
import SidebarChat from '../../components/sidebar-chat/sidebar-chat.component';

const ChattingUser = () => (
    <ChattingWrapperContainer>
        <SidebarChat/>
        <ChattingMain/>
    </ChattingWrapperContainer>
)

export default ChattingUser;