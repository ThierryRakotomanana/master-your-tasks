import React, { useState } from 'react';
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
        } ))
    }

    return (
        <div className="max-w-xl mx-auto">
            <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-slate-900">To Do App</h2>
                    <a className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm" type='submit' onClick={() => addNewTask()}>
                        {svg.a}
                        Add New Task
                    </a>
                </div>
                <form class="group relative">
                    {svg.search}
                    <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"  id="taskName" value={message} onChange={e => setMessage(e.target.value)} />
                </form>
            </header>
            <ul className='flex flex-col justify-start p-3 gap-3'>
                {
                    listItems.map( (task,index)  => 
                        <List value={task.value} index={index}
                        deleteTask={ () => deleteTask(task.id)} 
                        editTask={(newTitle) => editTask(newTitle, task.id)} 
                        key={task.id}></List> 
                    )
                }
            </ul>
        </div>
    )
}

