import React from 'react';
import {
    MainNotFixedContainer , 
    OverFlowHidden
} from './society-user.style';
import UserSociety from '../../components/user-society/user-society.component';

const SocietyUser = () => (
  
        <MainNotFixedContainer>
            <OverFlowHidden>
                <UserSociety/>
            </OverFlowHidden>
        </MainNotFixedContainer>

)

export default  SocietyUser;
