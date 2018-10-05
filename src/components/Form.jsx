import React from 'react';

import './Form.css';

import { setDate, addList, setText, setWeather } from '../actions';
import store from '../store';

const Form = ({date, color, text}) => {
    
    
    let _date, _text, _weather;
        
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
        store.dispatch(addList(_date.value, _text.value, _weather.value));

    }
    
    return(
        
           <form onSubmit={handleSubmit}>
           
            
            <input type="date" ref={input => _date = input} onChange={handleDate} value={date}/>
            <select ref={input => _weather = input} onChange={handleWeather}>
                <option value="sun">Sunny</option>
                <option value="rain">Rainny</option>
                <option value="snow">Snowy</option>
            </select>
            <textarea ref={input => _text = input} value={text} onChange={handleText} style={{marginTop: "10px"}} required>
            </textarea>
           
            <button type="submit" className="btn btn-secondary">Add Diary</button>

          </form>
       
        
    );
}

export default Form;