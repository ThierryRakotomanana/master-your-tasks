import React, { useState } from 'react';
import { List } from './task';

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
        <div className="">
            <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div>
                    <div class="text-xl font-medium text-black">ChitChat</div>
                    <p class="text-slate-500">You have a new message!</p>
                </div>
            </div>
            <div className="">
                <h2 className="">To Do App</h2>
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

