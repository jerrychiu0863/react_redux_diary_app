import C from '../constants/action-types';

export default function weahter(state='', action) {
    switch (action.type) {
        case C.SET_WEATHER:
            return action.payload
            
        case C.ADD_LIST:
            return ''
            
        default:
            return state
    }
}