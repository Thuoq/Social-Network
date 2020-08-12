import React from 'react'
import FromInput from '../form-input/form-input.component';
import axios from 'axios';
import {
    SidebarLeftContainer ,
    HeadingMessage,
    LeftContentContainer,
    ContactContainer

} from './sidebar-chat.styles';

import UserSideBarChat from '../user-sidebar-chat/user-sidebar-chat.component';

class SideBarChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldSearch : "",
            usersOnline : []
        }     
    }
    componentDidMount() {

        let token  = "Bearer "  + JSON.parse(localStorage.getItem("login"));
        axios(`http://localhost:2565/getAllUser`, {
            method: "get",
            headers : {
                'Authorization': token
                }
        }).then(({data : {data: {users}}}) => {
            this.setState({
                usersOnline: users
            })
            
        }) 
    }

    handleChange = e => {
        this.setState({
            fieldSearch : e.target.value
        })
    }

    render() {
        const filterUserSearch = this.state.usersOnline.filter(el => 
                el.firstName.toLowerCase().includes(this.state.fieldSearch.toLocaleLowerCase()) || el.lastName.toLowerCase().includes(this.state.fieldSearch.toLocaleLowerCase()))

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
                            handleChange = {this.handleChange}
                            name="search" 
                            placeholder="Search.." 
                            id="searchcontact" />
                    </form>
                {/* Contacts */}
                <ContactContainer >
                    {/* users */}
                    {
                        filterUserSearch.map((el,idx) => <UserSideBarChat user ={el} key ={idx}/>)
                    }
    
                    
                    {/* End user */}
                </ContactContainer>
                {/* End contacts */}
            </LeftContentContainer>
            {/* End contact section */}				  
        </SidebarLeftContainer>
        )
    }
}

export default SideBarChat;