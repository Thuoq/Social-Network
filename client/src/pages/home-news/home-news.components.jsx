import React from 'react';
import {MainNotFixedContainer} from './home-news.styles';
import PostNew from '../../components/post-new/post-new.component';
const HomeNews = () => {
    return (
        <>
           
            <MainNotFixedContainer>
                <PostNew/>
            </MainNotFixedContainer>
        </>
    )
}


export default HomeNews;