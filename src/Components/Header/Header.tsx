import React, { useState, useEffect } from 'react'

import {BookFormList} from "../BookFormList/BookFormList";
import {BookBox, BookBoxProps} from "../BookBox/BookBox";

import Button from 'react-bootstrap/Button'
import Form from "react-bootstrap/Form";

import axios from 'axios';

import './Header.css'
import {FormLabel} from "react-bootstrap";

interface Genre
{
    id: number,
    name: string
}

interface Book
{

}

export function Header()
{
    function hideRightPanel(id: string)
    {
        let panel = document.querySelector('#'+id) as HTMLElement;
        panel.classList.add('invisible');
    }

    function showRightPanel(id: string)
    {
        let panel = document.querySelector('#'+id) as HTMLElement;
        panel.classList.remove('invisible');
    }

    const [genres, setGenres] = useState<Genre[]>([]);
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(()=>{
        //console.log('getData started...');

        const url = 'https://automati-develop.herokuapp.com/genres';

        axios.defaults.baseURL = url;
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET';
        axios.get<Genre[]>(url)
            .then(response => {
                // console.log('response: ' + JSON.stringify(response.data));

                setGenres(response.data);

               // console.log('genres: ' + JSON.stringify(genres));
            })
            .catch(error => {
                console.error(error);
            });
    })

    return (

        <header className='bg-primary text-white header'>
            <div className=' d-inline-block col'>
                <a href={'/login'}>
                    <img src='/books/png/022-icon-3839775.png' className='d-inline-block rounded-circle icon bg-white'/>
                </a>
            </div>
            <div className=' d-inline-block col'>
                <a href={'/'}>
                    ReadMe
                </a>
            </div>
            <div className='d-inline-block col-4 col-sm-6 col-xl-9'></div>
            <div className='d-inline-block'>
                <button className='btn col' id='searchMenuButton' onClick={() => showRightPanel('search-right-panel')}>
                    <img src='/books/png/022-icon-3839775.png' className='d-inline-block icon'/>
                </button>
                <button className='btn col' id='catalogMenuButton' onClick={() => showRightPanel('catalog-right-panel')}>
                    <img src='/books/png/034-icon-3839819.png' className='d-inline-block icon'/>
                </button>
            </div>
            <div>
                <div className='right-panel invisible' id='search-right-panel'>
                    <div className='inner-header'>
                        <div>
                            <button className='btn col' id='searchMenuButton' onClick={() => hideRightPanel('search-right-panel')}>
                                <img src='/books/png/022-icon-3839775.png' className='d-inline-block icon'/>
                            </button>
                            <h1 className='d-inline-block col-9'>Searching</h1>
                            <hr/>

                            <Form>
                                <Form.Group>
                                    <Form.Label>Genres</Form.Label>
                                    {genres.map((props) => {
                                        return (
                                            <Form.Check
                                                label={props.name}
                                                id={`${props.id}`}
                                            />
                                        )
                                    })}
                                </Form.Group>
                            </Form>

                        </div>
                    </div>
                </div>
                <div className='right-panel invisible' id='catalog-right-panel'>
                    <div className='right-panel-header'>
                        <button className='btn col' id='searchMenuButton' onClick={() => hideRightPanel('catalog-right-panel')}>
                            <img src='/books/png/034-icon-3839819.png' className='d-inline-block icon'/>
                        </button>
                        <h1 className='d-inline-block col-9'>Favorites</h1>
                    </div>
                    <hr/>
                    <div className='catalog-container'>
                        <BookFormList/>
                    </div>
                    <div className='buy-button-container'>
                        <button className='buy-button'>Buy</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
