import C from '../constants/action-types';

const getToday = () => {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;       
    return today;
}

export default function date(state=getToday(), action) {
    switch(action.type) {
        case C.SET_DATE:
            return action.payload
        
        case C.ADD_LIST:
            return getToday();
            
        default:
            return state;
    }
}