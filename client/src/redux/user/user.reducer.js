import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser : null,
    hidden: {
        updateAddress : false,
        updateSchoolSec: false,
        updateSchoolPri : false,
        updateInterested: false,
        updateDetail :false
    }
}

const userReducer = (state = INITIAL_STATE , action ) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER: 
            return {
                ...state,
                currentUser : action.payload
            }
        case UserActionTypes.USER_LOG_OUT: 
            return {
                ...state,
                currentUser : null,
            }
        case UserActionTypes.USER_UPDATE_INFORMATION:
            return {
                ...state,
                hidden: {
                    ...state.hidden,
                    updateDetail: !state.hidden.updateDetail
                }
            }
        case UserActionTypes.USER_UPDATE_ADDRESS:   
            return {
                ...state,
                hidden : {
                    ...state.hidden,
                    updateAddress : !state.hidden.updateAddress
                }
            }
        case UserActionTypes.USER_UPDATE_INTERESTED:
            return {
                ...state,
                hidden : {
                    ...state.hidden,
                    updateInterested: !state.hidden.updateInterested
                }
            }
        case UserActionTypes.USER_UPDATE_PRI:
            return {
                ...state,
                hidden : {
                    ...state.hidden,
                    updateSchoolPri : !state.hidden.updateSchoolPri
                }
            }
        case UserActionTypes.USER_UPDATE_SECONDARY:
            return {
                ...state,
                hidden : {
                    ...state.hidden,
                    updateSchoolSec : !state.hidden.updateSchoolSec 
                }
            }
        default: 
            return state;
    }
}

export default userReducer;