import React from 'react'


const ProfileUserAddress = ({currentUser}) => {
    return (
        <>
            <h2>Address</h2>
            <h4>Country:</h4>
            <p>{currentUser.country}</p>
            <h4>State:</h4>
            <p>{currentUser.state}</p>
            <h4>District:</h4>
            <p>{currentUser.distinct}</p>
         
        </>
    )
}

export default ProfileUserAddress;