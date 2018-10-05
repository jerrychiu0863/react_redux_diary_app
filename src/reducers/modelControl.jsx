import C from '../constants/action-types';

export default function modelControl(state=false, action) {
    switch (action.type) {
        case C.SET_MODEL:
            return action.payload
            
        case C.ADD_LIST:
            return false;
            
        default:
            return state;
    }
}