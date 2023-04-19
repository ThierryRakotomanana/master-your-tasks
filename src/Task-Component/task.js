import React, { useState } from 'react';
import { className } from './className';
import { Toggle } from '../headlessUiComponent/toogle';

export function List({value, deleteTask, editTask}){  
        const [content, setContent] = useState(value)    
        const [show, setShow] = useState(true)
        function changeEdit(newTitle){
                setShow(!show)
                newTitle && editTask(newTitle)
        }
        return (
                <li className="">
                     <span className={className.grid}>
                        {show ? <span className={className.first}>{content} </span>: <input className={className.input + " " + className.first} value={content}  onChange={ (e) => setContent(e.target.value)}/>}
                        <button type='button' className={className.button} onClick={deleteTask}>Delete</button> 
                        <Toggle className={className.button} onClick={() => changeEdit( show ? false : content)}>{show ? "Edit" : "Save your edit"}</Toggle>
                     </span> 
                </li>
        )
}