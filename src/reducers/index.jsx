import color from './color';
import date from './date';
import list from './list';
import modelControl from './modelControl';
import text from './text';
import weather from './weather';

import { combineReducers } from 'redux';

export default combineReducers({
    color,
    date,
    text,
    weather,
    list,
    isOpenModel: modelControl
})