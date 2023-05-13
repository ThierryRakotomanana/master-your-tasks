import React, { useState } from 'react';

export function List({value, index, deleteTask, editTask}){  
        const [content, setContent] = useState(value)    
        const [show, setShow] = useState(true)
        function changeEdit(newTitle){
                setShow(!show)
                newTitle && editTask(newTitle)
        }
        return (
                <li className={ `flex flex-row justify-between items-center rounded-md p-3 + ${index%2 == 0 ? "bg-teal-600" : "bg-slate-600"}`}>
                        <span>
                                {show ? <span className="text-slate-100 pl-10">{content} </span>: <input className={"focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-sm py-2 pl-1 ring-1 ring-slate-200 shadow-sm"} value={content}  onChange={ (e) => setContent(e.target.value)}/>}
                        </span>
                        <span className="flex flex-row justify-between items-center pr-10 gap-5">
                                <button type='button' className="bg-red-600 hover:bg-red-300 text-white font-semibold hover:text-slate-600 py-1.5 px-2 rounded-md border-blue-500 hover:border-transparent" onClick={deleteTask}>Delete</button> 
                                <button className="bg-indigo-600 hover:bg-indigo-300 text-white font-semibold hover:text-slate-600 py-1.5 px-5 rounded-md border-indigo-500 hover:border-transparent" onClick={() => changeEdit( show ? false : content)}>{show ? "Edit" : "Save your edit"}</button>
                        </span>  
                </li>
        )
}