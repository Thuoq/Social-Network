import React from 'react'


const ProfileUserDetail = ({currentUser}) => (
    <>
        <h2>Personal Detail</h2>
        <h4>First Name:</h4>
        <p>{currentUser.firstName}</p>
        <h4>Last Name:</h4>
        <p>{currentUser.lastName}</p>
        <h4>Email:</h4>
        <p>{currentUser.email}</p>
        <h4>Date Of Birth:</h4>
        <p>27 Aug 2001</p>
        <h4>Gender:</h4>
        <p>{currentUser.sex}</p>
       
    </>
)
export default ProfileUserDetail;