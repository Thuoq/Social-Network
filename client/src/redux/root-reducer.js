  
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import chattingReducer from './chatting/chatting.reducer';
const rootReducer =  combineReducers({
	user : userReducer,
	chat : chattingReducer
});
export default rootReducer 
