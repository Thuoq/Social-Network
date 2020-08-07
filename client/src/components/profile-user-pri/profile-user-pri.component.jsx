import React from 'react';


const ProfileUserPri = ({currentUser}) => (
    <>
        <h2>Primary Education</h2>
        <h4>Primary School:</h4>
        <p>{currentUser[1] ? currentUser[1].name : " "}</p>
        <h4>Degree:</h4>
        <p>{currentUser[1] ? currentUser[1].degree :  " "}</p>
        <h4>Field of Study:</h4>
        <p>{currentUser[1] ? currentUser[1].fieldStudy : " "}</p>
        <h4>Academy Year:</h4>
        <p>{currentUser[1] ?  currentUser[1].startYear : " "}
            -{currentUser[1] ?  currentUser[1].endYear : " "}</p>
    </>
)
export default ProfileUserPri;