import C from '../constants/action-types';

export default function text(state='', action) {
    switch(action.type) {
        case C.SET_TEXT:
            return action.payload
            
        case C.ADD_LIST:
            return ''
            
        default:
            return state;
    }
}