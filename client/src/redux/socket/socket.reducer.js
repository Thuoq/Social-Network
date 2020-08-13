import io from 'socket.io-client';

const socketURL  = "http://192.168.1.2:2565";
const socket = io(socketURL)

const INITIAL_STATE = {
    socketClient : socket
}

const socketReducer = (state = INITIAL_STATE , action ) => {
    
    switch(action.type) {
        default : 
            return state
    }
}

export default socketReducer;