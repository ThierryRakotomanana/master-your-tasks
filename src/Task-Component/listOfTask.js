import React, { useState } from 'react';
import { className } from './className';
import { List } from './task';
import { Toggle } from '../headlessUiComponent/toogle';
import { svg} from './svg';

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
        <div className="max-w-3xl mx-auto bg-gray-200">
            <header className={className.header}>
                <div className={className.divOfHeader}>
                    <h2 className={className.h2}>To Do App</h2>
                    <a className={className.a} type='submit' onClick={() => addNewTask()}>
                        {svg.a}
                        Add New Task
                    </a>
                </div>
                <form class={className.form}>
                    {svg.search}
                    <input className={className.input}  id="taskName" value={message} onChange={e => setMessage(e.target.value)} />
                </form>
            </header>
            <ul>
                {
                    listItems.map( (task)  => 
                        <List value={task.value} 
                        deleteTask={ () => deleteTask(task.id)} 
                        editTask={(newTitle) => editTask(newTitle, task.id)} 
                        key={task.id}/>
                    )
                }
                <Toggle/>
            </ul>
        </div>
    )
}

