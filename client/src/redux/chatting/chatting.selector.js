import { createSelector } from 'reselect';


const selectChat = state => state.chat


export const selectUserChat = createSelector(
    [selectChat], 
    chat => chat.userChat
)
export const selectStoreChatUser = createSelector(
    [selectChat],

    chat => chat.storeChatUser
)
