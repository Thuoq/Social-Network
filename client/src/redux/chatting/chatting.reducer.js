import CHATTING_ACTIONS_TYPES from './chatting.types';
import moment from 'moment';
const INITIAL_STATE = {
    userChat: null,
    storeChatUser: []
}

const chattingReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHATTING_ACTIONS_TYPES.AXIOS_MESSAGE_CHAT_START: 
            return {
                ...state
            }
        case CHATTING_ACTIONS_TYPES.AXIOS_MESSAGE_CHAT_SUCCESS:
            return {
                ...state,
                storeChatUser: [...state.storeChatUser, action.payload]
            }
        case CHATTING_ACTIONS_TYPES.CHOOSE_USER_CHAT :
            return {
                ...state,
                userChat: action.payload
            }
        case CHATTING_ACTIONS_TYPES.CHATTING_SEND:
            return {
                ...state,
                storeChatUser: [...state.storeChatUser,{message : action.payload,
                                                        timeSend : moment().format()}]
            }
        default : 
            return state
    }
}

export default chattingReducer;