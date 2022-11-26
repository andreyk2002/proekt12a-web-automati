import React from 'react'

import './BookForm.css'

interface BookFormProps
{
    imageSrc: string
    author: string
    title: string
    cost: number
}


export function BookForm(props : BookFormProps)
{

    function removeBook()
    {
        alert('removed');
    }

    return (
        <div className='border'>
            <input type='checkbox' className='d-inline-block col'/>
            <img className='d-inline-block col book-form-icon' src={props.imageSrc}/>
            <div className='d-inline-block col-7'>
                <h2>{props.title}</h2>
                <h4>{props.author}</h4>
            </div>
            <div className='d-inline-block col'>
                <b>{props.cost}<span>$</span></b>
            </div>
            <img className='d-inline-block col remove-button' src='/books/png/cross.png' onClick={()=>removeBook()}/>
        </div>

    )
}