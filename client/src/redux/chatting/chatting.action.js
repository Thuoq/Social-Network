import CHATTING_ACTIONS_TYPES from './chatting.types'

export const toggleUserChat = (user) => ({
    type: CHATTING_ACTIONS_TYPES.CHOOSE_USER_CHAT,

    payload: user
})

export const sendMessage = message => ({
    type : CHATTING_ACTIONS_TYPES.CHATTING_SEND,
    payload : message
})