import React from 'react';

import './Form.css';

import { setColor, setDate, addList, setText, setWeather } from '../actions';
import store from '../store';

const Form = ({date, color, text}) => {
    
    
    let _color, _date, _text, _weather;
    
    const handleColor = e => {
        store.dispatch(setColor(_color.value));
    }
    
    const handleDate = e => {
        store.dispatch(setDate(_date.value));
    }
    
    const handleText = () => {
        store.dispatch(setText(_text.value));
    }
    
    const handleWeather = () => {
        store.dispatch(setWeather(_weather.value))
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        store.dispatch(addList(_color.value, _date.value, _text.value, _weather.value));

    }
    
    return(
        
           <form onSubmit={handleSubmit}>
           
            <input type="color"  onChange={handleColor} ref={input => _color = input} value={color}/>
            <input type="date" ref={input => _date = input} onChange={handleDate} value={date}/>
            <textarea ref={input => _text = input} value={text} onChange={handleText}>
            </textarea>
            <select ref={input => _weather = input} onChange={handleWeather}>
                <option value="sun">Sunny</option>
                <option value="rain">Rainny</option>
                <option value="snow">Snowy</option>
            </select>
            <button type="submit" className="btn">Click</button>

          </form>
       
        
    );
}

export default Form;