import C from '../constants/action-types';

import { v4 } from 'uuid';



export const setDate = (value) => ({
    type: C.SET_DATE,
    payload: value
})

export const setText = (value) => ({
    type: C.SET_TEXT,
    payload: value
})

export const setWeather = (value) => ({
    type: C.SET_WEATHER,
    payload: value
})

export const addList = ( date, text, weather) => ({
    type: C.ADD_LIST,
    payload: {
        date,
        text,
        weather,
        id: v4()
    }
})

export const setModel = (value) => ({
    type: C.SET_MODEL,
    payload: value
})

export const dismiss = id => ({
    type: C.DISMISS,
    payload: id
})