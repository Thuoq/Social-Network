import React from 'react';
import {SuggestFixedContainer,
    SuggestContainer,
    SidebarRightContainer,
    RightContentContainer
} from './suggest-user.styles';

const SuggestUser = () =>{
    return (
        <SuggestFixedContainer >
            <SuggestContainer >
                <p id="suggestion">Suggestion</p>
            </SuggestContainer>
            {/* Start of right fixed */}
            <SidebarRightContainer>
            {/* suggested user */}
                <RightContentContainer className="rightcontent">
                    <img src="/images/001-photographer.png" alt="pho3"/>
                    <p className="name">User Name</p>
                    <a href="#/" id="connect4">✚ Connect</a>
                </RightContentContainer>
                <RightContentContainer className="rightcontent">
                    <img src="/images/002-people.png" alt="pho4" />
                    <p className="name">User Name</p>
                    <a href="#/" id="connect5">✚ Connect</a>
                </RightContentContainer>
            {/* End of sugested user */}
            </SidebarRightContainer>
        {/* End of right fixed */}
      </SuggestFixedContainer>
    )
}
export default SuggestUser