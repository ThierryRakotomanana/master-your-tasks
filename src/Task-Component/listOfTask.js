import React, { useState } from 'react';
import { List } from './task';
import './Task.css'

export function Task(){
    const [message, setMessage] = useState('');
    const [listItems, setListItems] = useState([]);
    
    function addNewTask(){
        const newTask = [...listItems], id = new Date().getTime() , value = message;
        newTask.push({id, value})
        setListItems(newTask)
    }

    function deleteTask(id){
        const newTaskList = [...listItems]
        setListItems(newTaskList.filter( task => task.id !== id ))
    }

    function editTask(newTitle, id){
        let newTaskList = [...listItems]
        setListItems(newTaskList.map( task => {
            if (task.id === id ) task.value = newTitle
            return task
        } ))
    }

    return (
        <div className="container">
            <div className="container">
                <h2 className="Title">To Do App</h2>
                <input id="taskName" value={message} onChange={e => setMessage(e.target.value)} />
                <button type='submit' onClick={() => addNewTask()}>Add new task</button>
            </div>
            <ul>
                {
                    listItems.map( (task)  => 
                        <List value={task.value} 
                        deleteTask={ () => deleteTask(task.id)} 
                        editTask={(newTitle) => editTask(newTitle, task.id)} 
                        key={task.id}/>
                    )
                }
            </ul>
        </div>
    )
}

