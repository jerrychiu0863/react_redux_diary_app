import C from '../constants/action-types';
import _ from 'lodash';


export default function list(state=[], action) {
    switch(action.type) {
        case C.ADD_LIST:
            const { date, id, text, weather } = action.payload;
            return [...state, { date, id: id, text, weather}]
        
        case C.DISMISS:
            const updatedList = state.filter(s => s.id !== action.payload);
            return updatedList
            
        case C.SORT_BY_DATE:
            const sortedList = _.orderBy(state, [action.payload])
            return sortedList;
               
        default:
            return state;
    }
}

