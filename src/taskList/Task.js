import React, { useState } from 'react';
import { List } from './list';

export function Task(){
    //const task = {}
    const [message, setMessage] = useState('');
    const [value, setValue] = useState(message);
    const [listItems, setListItems] = useState({});

    function handleClick(){
        setValue(message)
        setListItems(listItems)
    }
        return (
            <div className="container">
                <div className="container">
                    Enter here the name of task
                    <input id="taskName" value={message} onChange={e => setMessage(e.target.value)} />
                    <button type='submit' onClick={handleClick}>Add new task</button>
                </div>
                <List value={value}/>
            </div>
        )
}

