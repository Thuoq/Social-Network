import React from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import {
    PostNewContainer,
    UserImageContainer,
    UserNameContainer,
    QuotesContainer,
    PostBarContainer

} from './post-new.styles';

const PostNew = ({currentUser}) => {
    return (
         
            <PostNewContainer  style={{marginBottom: '20px', paddingBottom: '10px'}}>	
                <UserImageContainer >
                    <img style={{borderRadius: '100px'}} src= {currentUser.photoAvatar} alt="user-1"/>
                </UserImageContainer>
                <div >				 
                    <UserNameContainer  style={{top: '15px'}}>{`${currentUser.firstName} ${currentUser.lastName}`}</UserNameContainer>
                </div>
                <QuotesContainer >
                    <textarea id="mypara" placeholder="Share an article ,photo ,video or idea." defaultValue={""} />
                </QuotesContainer>
                {/* image load to post */}
                {/* <div className="post">
                    <img id="load2" className="postimg" src="" alt="i1" />
                </div> */}
                <PostBarContainer >
                    <FormInput type="file" accept="images/*" className="chooseimg" />
                    <button type="button"  className="imgbttn" id="imgbttn"><span  aria-label="pic1" role="img">📷</span> Images</button>
                    <button type="button" id="postmypost" className="postmypost" >Post</button>
                </PostBarContainer>
        </PostNewContainer>

    )
}

const mapStateToProps = ({user: {currentUser}}) => ({
    currentUser
})
export default connect(mapStateToProps)(PostNew) ;