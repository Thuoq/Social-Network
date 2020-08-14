import { createSelector } from 'reselect';


const selectUser = state => state.user;



export const selectCurrentUser = createSelector(
    [selectUser] ,
    user => user.currentUser)

export const selectHidden  = createSelector(
    [selectUser],
    user => user.hidden);

export const selectUpdateAddress  = createSelector(
    [selectHidden],
    hidden => hidden.updateAddress)

export const selectUpdateSchoolSec = createSelector(
    [selectHidden],
    hidden => hidden.updateSchoolSec
)

export const selectUpdateSchoolPri  = createSelector(
    [selectHidden],
    hidden => hidden.updateSchoolPri
)

export const selectUpdateInterested = createSelector(
    [selectHidden], 
    hidden => hidden.updateInterested
)

export const selectUpdateDetail = createSelector(
    [selectHidden],
    hidden => hidden.updateDetail
)