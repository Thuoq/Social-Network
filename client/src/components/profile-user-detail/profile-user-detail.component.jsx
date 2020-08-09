import React from 'react'
import moment from 'moment'

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
        <p>{moment(currentUser.birthDay).format("MMMM Do YYYY")}</p>
        <h4>Gender:</h4>
        <p>{currentUser.sex}</p>
       
    </>
)
export default ProfileUserDetail;