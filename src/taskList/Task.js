import React, { useState } from 'react';
import { List } from './list';
import './Task.css'

export function Task(){
    const [message, setMessage] = useState('');
    const [listItems, setListItems] = useState({toDo : []});
    
    function handleClick(){
        setListItems({
            toDo : listItems.toDo.concat(message)
        })
    }
        return (
            <div className="container">
                <div className="container">
                    <h2 className="Title">To Do App</h2>
                    <input id="taskName" value={message} onChange={e => setMessage(e.target.value)} />
                    <button type='submit' onClick={handleClick}>Add new task</button>
                </div>
                <ul>
                 {listItems.toDo.map( (tache, index)  => <List value={tache} onClick={ () => setListItems({toDo : listItems.toDo.filter(task => task!== tache)})} id={index} key={index}/>)}
                </ul>
            </div>
        )
}

