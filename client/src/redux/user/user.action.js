import UserActionTypes from './user.types';

export const setCurrentUSer = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const logOutCurrentUser = () => ({
    type: UserActionTypes.USER_LOG_OUT
})

export const toggleUpdateInformation = () => ({
    type: UserActionTypes.USER_UPDATE_INFORMATION
})

export const toggleUpdateAddress = () => ({
    type: UserActionTypes.USER_UPDATE_ADDRESS
})

export const toggleUpdateSchoolPri = () => ({
    type: UserActionTypes.USER_UPDATE_PRI
})

export const toggleUpdateSchoolSec = () => ({
    type: UserActionTypes.USER_UPDATE_SECONDARY
})

export const toggleUpdateInterested = () => ({
    type: UserActionTypes.USER_UPDATE_INTERESTED
})