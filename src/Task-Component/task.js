import React, { useState } from 'react';
import { className } from './className';
import { svg } from './svg';

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
                        <button className={className.button} onClick={() => changeEdit( show ? false : content)}>{show ? "Edit" : "Save your edit"}</button>
                     </span> 
                </li>
        )
}