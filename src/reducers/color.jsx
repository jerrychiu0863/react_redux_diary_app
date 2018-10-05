import C from '../constants/action-types';

export default function color(state='#000000', action) {
    switch (action.type) {
        case C.SET_COLOR:
            return action.payload
        
        case C.ADD_LIST:
            return "#000000"
            
        default:
            return state;
    }
}