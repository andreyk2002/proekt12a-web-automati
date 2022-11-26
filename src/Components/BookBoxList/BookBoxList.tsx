import React, { useState, useEffect } from 'react'

import {BookBox, BookBoxProps} from "../BookBox/BookBox";

import axios from 'axios';

interface Genre
{
    id: number,
    name: string
}

interface BookBoxResponse
{
    id: number,
    title: string,
    bookFile: string,
    cost: number,
    description: string,
    genres: Genre[],
}

export function BookBoxList()
{

    function getData(params: string) {
        console.log('getData started...');

        const url = 'https://automati-develop.herokuapp.com/books/search';

        axios.defaults.baseURL = url;
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'POST';
        axios.post<BookBoxResponse[]>(url, params)
            .then(response => {
                console.log('response: ' + JSON.stringify(response.data));

                const bookBoxResponse :BookBoxResponse[] = response.data;
                bookBoxResponse.forEach(element => {
                    let bookBox : BookBoxProps = {
                        id: element.id,
                        imageSrc: 'http://www.w3.org/2008/site/images/logo-w3c-screen-lg',
                        author: 'author',
                        title: element.title,
                        cost: element.cost
                    };
                    data.push(bookBox);
                })
                console.log('data: ' + JSON.stringify(data));
                console.log('getData finished...');
            })
            .catch(error => {
                console.error(error);
            });
    }


    const [data, setData] = useState<BookBoxProps[]>([]);

    useEffect(() =>
    {
        getData('{}');
    });

    return (

        <div className='container'>
            <ul className='col-lg-11'>
                <li>{data.length}</li>
                {data.map((props) => {
                    return (
                        <li className='d-inline-block'>
                            <BookBox id={props.id} imageSrc={props.imageSrc} author={props.author}  title={props.title} cost={props.cost}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}