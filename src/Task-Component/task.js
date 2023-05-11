import React, { useState } from 'react';
import { Toggle } from '../headlessUiComponent/toogle';

export function List({value, deleteTask, editTask}){  
        const [content, setContent] = useState(value)    
        const [show, setShow] = useState(true)
        function changeEdit(newTitle){
                setShow(!show)
                newTitle && editTask(newTitle)
        }
        return (
                <li className="flex flex-row justify-between items-center">
                        <span className="pl-10">
                                {show ? <span className="text-slate-800">{content} </span>: <input className={className.input + " " + className.first} value={content}  onChange={ (e) => setContent(e.target.value)}/>}
                        </span>
                        <span className="flex flex-row justify-between items-center pr-10 gap-5">
                                <button type='button' className="bg-blue-500 hover:bg-blue-200 text-slate-200 font-semibold hover:text-whhite py-1.5 px-2 rounded-md border-blue-500 hover:border-transparent rounded" onClick={deleteTask}>Delete</button> 
                                <Toggle onClick={() => changeEdit( show ? false : content)}>{show ? "Edit" : "Save your edit"}</Toggle>
                        </span>  
                </li>
        )
}