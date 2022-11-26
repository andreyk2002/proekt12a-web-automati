import React from 'react'

import Image from 'react-bootstrap/Image'

import './BookBox.css'

export interface BookBoxProps
{
    id: number,
    imageSrc: string
    author: string
    title: string
    cost: number
}

export function BookBox(props : BookBoxProps)
{
    function plusButtonOnClick()
    {
        alert('Well done')
    }

    return (
        <div className='d-inline-block m-4 border border-primary'>
            <a href={'/books/' + props.id}>
                <Image src={props.imageSrc} className='m-2 book-icon' rounded={true}/>
                <p className='m-0'>{props.author}</p>
                <p className='m-0'>{props.title}</p>
                <p><b>{props.cost}</b> <span>$</span></p>
            </a>
            <input className='float-end plus-button' type="image" src="/books/png/plus.png" onClick={plusButtonOnClick}/>
        </div>

    )
}