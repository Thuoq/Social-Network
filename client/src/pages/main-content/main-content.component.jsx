import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomeNews from '../home-news/home-news.components';

import ChattingUser  from '../chatting-user/chatting-user.components';
import SocietyUser from '../society-user/society-user.components';
import SideBarLeft from '../../components/side-bar-left/side-bar-left.component';

const MainContent = ({match}) => {
    return (
        <div>
            <SideBarLeft/> 
                <Switch>
                    <Route exact path ="/" component = {HomeNews} />
                    <Route exact path ="/message" component ={ChattingUser} />
                    <Route exact path = "/society" component = {SocietyUser}/>
                </Switch>
        </div>
       
    )
}
export default MainContent;