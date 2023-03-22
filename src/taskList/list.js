import React from 'react';

export function List({value}){
    
        return (
                <li className="container" key={value}>
                    {value}
                </li>
        )
}