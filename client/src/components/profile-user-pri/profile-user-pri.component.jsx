import React from 'react';


const ProfileUserPri = ({currentUser}) => (
    <>
        <h2>Primary Education</h2>
        <h4>Primary School:</h4>
        <p>{currentUser.school[0] ? currentUser.school[0].name : " "}</p>
        <h4>Degree:</h4>
        <p>{currentUser.school[0] ? currentUser.school[0].degree :  " "}</p>
        <h4>Field of Study:</h4>
        <p>{currentUser.school[0] ? currentUser.school[0].fieldStudy : " "}</p>
        <h4>Academy Year:</h4>
        <p>{currentUser.school[0] ?  currentUser.school[0].startYear : " "}
            -{currentUser.school[0] ?  currentUser.school[0].endYear : " "}</p>
    </>
)
export default ProfileUserPri;