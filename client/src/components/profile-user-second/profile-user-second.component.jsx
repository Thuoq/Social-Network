import React from 'react'


const ProfileUserSecond = ({currentUser}) => (
    <>
        <h2>Secondary Education</h2>
        <h4>Secondary School:</h4>
        <p>{currentUser.school[1] ? currentUser.school[1].name : " "}</p>
        <h4>Degree:</h4>
        <p>{currentUser.school[1] ? currentUser.school[1].degree :  " "}</p>
        <h4>Field of Study:</h4>
        <p>{currentUser.school[1] ? currentUser.school[1].fieldStudy : " "}</p>
        <h4>Academy Year:</h4>
        <p>{currentUser.school[1] ?  currentUser.school[1].startYear : " "}
            -{currentUser.school[1] ?  currentUser.school[1].endYear : " "}</p>
    </>
)
export default ProfileUserSecond;