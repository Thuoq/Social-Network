import  {takeEvery}  from 'redux-saga/effects';
import axios from 'axios';



import CHATTING_ACTIONS_TYPES from './chatting.types';
let token = "Bear " + JSON.parse(localStorage.getItem("login"))

export function* fetchChattingUserAsync() {
    // const dataUser = yield axios(`http://localhost:2565/refresh`, {
    //     method : "get",
    //     headers : {
    //       'Authorization': token
    //     }
    //     data :  
    // })
}

export function* fetchChattingUserStart () {
    yield takeEvery(CHATTING_ACTIONS_TYPES.CHOOSE_USER_CHAT,  
        fetchChattingUserAsync  )
}