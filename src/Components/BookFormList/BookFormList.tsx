import React from 'react'

import {BookForm} from "../BookForm/BookForm";

import './BookFormList.css'

export function BookFormList()
{
    const mock = [
        {
            imageSrc: 'http://www.w3.org/2008/site/images/logo-w3c-screen-lg',
            author: 'author',
            title: 'title',
            cost: 30
        },
        {
            imageSrc: 'http://www.w3.org/2008/site/images/logo-w3c-screen-lg',
            author: 'author',
            title: 'title',
            cost: 30
        },
        {
            imageSrc: 'http://www.w3.org/2008/site/images/logo-w3c-screen-lg',
            author: 'author',
            title: 'title',
            cost: 30
        },
        {
            imageSrc: 'http://www.w3.org/2008/site/images/logo-w3c-screen-lg',
            author: 'author',
            title: 'title',
            cost: 30
        },
        {
            imageSrc: 'http://www.w3.org/2008/site/images/logo-w3c-screen-lg',
            author: 'author',
            title: 'title',
            cost: 30
        },
    ]

    return (
        <div>
            <div className="book-form-container">
                <ul>
                    {mock.map((props) => {
                        return (
                            <li>
                                <BookForm imageSrc={props.imageSrc} author={props.author}  title={props.title} cost={props.cost}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}