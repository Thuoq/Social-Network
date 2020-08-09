import React from 'react'
const ProfileUserInterest  = ({currentUser}) => {
    return (
        <>
            <h2>More About You</h2>
            <h4>Hobby:</h4>
            <p>{currentUser.hobby}</p>
            <h4>Language Known:</h4>
            <p>{currentUser.language}</p>
        </>
    )
}



export default ProfileUserInterest;