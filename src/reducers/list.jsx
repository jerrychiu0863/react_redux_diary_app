import C from '../constants/action-types';


export default function list(state=[], action) {
    switch(action.type) {
        case C.ADD_LIST:
            const { date, id, text, weather } = action.payload;
            return [...state, { date, id: id, text, weather}]
        
        case C.DISMISS:
            const updatedList = state.filter(s => s.id !== action.payload);
            return updatedList
            
       
        default:
            return state;
    }
}

