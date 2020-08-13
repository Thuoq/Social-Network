  
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import chattingReducer from './chatting/chatting.reducer';
import socketReducer from './socket/socket.reducer';
const rootReducer =  combineReducers({
	user : userReducer,
	chat : chattingReducer,
	socket : socketReducer
});
export default rootReducer 
