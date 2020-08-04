import React from 'react'
import FromInput from '../form-input/form-input.component';
import {
    SidebarLeftContainer ,
    HeadingMessage,
    LeftContentContainer,
    ContactContainer

} from './sidebar-chat.styles';
const SidebarChat = () => {
    return (
        <SidebarLeftContainer >	
        {/* heading messaging */}
            <HeadingMessage >
                <p>Messaging</p>
            </HeadingMessage>
            {/* contact section content */}
            <LeftContentContainer >
            {/* Search bar */}
                <form id="contactsearch">
                        <FromInput 
                        type="text"
                        name="search" 
                        placeholder="Search.." 
                        id="searchcontact" />
                </form>
            {/* Contacts */}
            <ContactContainer >
                {/* users */}
                <div className="contactuser" style={{borderLeft: '8px solid #009688', marginTop: '18px'}} onclick="select(1)">
                    <img src="/images/001-photographer.png" className="contimg" alt="pho6"/>
                    <p className="name">Hien Sambi</p>
                </div>
                {/* End user */}
            </ContactContainer>
            {/* End contacts */}
        </LeftContentContainer>
        {/* End contact section */}				  
      </SidebarLeftContainer>
    )
}
export default SidebarChat;