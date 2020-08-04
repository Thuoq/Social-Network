import React from 'react';
import FormInput from '../form-input/form-input.component';
import {
    PostNewContainer,
    UserImageContainer,
    UserNameContainer,
    QuotesContainer,
    PostBarContainer

} from './post-new.styles';

const PostNew = () => {
    return (
       
            <PostNewContainer  style={{marginBottom: '20px', paddingBottom: '10px'}}>	
                <UserImageContainer >
                    <img src="../images/upload.png" alt="user-1"/>
                </UserImageContainer>
                <div >				 
                    <UserNameContainer  style={{top: '15px'}}>Long Thuoq</UserNameContainer>
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
export default PostNew;