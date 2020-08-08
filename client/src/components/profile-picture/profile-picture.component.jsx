import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import {BubbleContainer,
        SlideShowContainer,
        SingleSlide
} from './profile-picture.styles';
const ProfilePicture = ({currentUser}) => {
    return (
        <SlideShowContainer >
        {/* change slideshow image */}
            <FormInput type="file" name="pic"  title="change slideshow image" />
            <p >✎</p>
            {/* end of change slideshow image */}
            <BubbleContainer >

            </BubbleContainer>
            {/* sildeshow images */}
            <SingleSlide>
                <img src={currentUser.photoProfile} alt="pho5"/>
            </SingleSlide>
            {/* End of slideshow images */}
            {/* prev and next button to change slideshow */}
        </SlideShowContainer>
    ) 
}

const mapStateToProps = ({user: {currentUser}}) => ({
    currentUser,
})

export default connect(mapStateToProps)(ProfilePicture) ;