import { createSelector} from 'reselect';


const selectSocket = state => state.socket;


export const selectSocketClient = createSelector(
    [selectSocket],
    socket => socket.socketClient
)