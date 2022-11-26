import React from 'react'
import {useFetch} from 'use-http'
import {useParams} from "react-router-dom";

import Image from "react-bootstrap/Image";

export function BookPage()
{
    const params = useParams();
    const options = {}
    const { loading, error, data = [] } = useFetch('https://example.com/todos', options, [])
    return (

        <>
            {error && 'Error!'}
            {loading && 'Loading...'}
            <div>
                <div className=''>
                    <Image src='' className='d-inline-block m-5 col-9 col-md-5' roundedCircle={true}></Image>
                    <div className='col-md-5 d-inline-block'>
                        <h2>{}</h2>
                        <p>{}</p>
                    </div>
                </div>
            </div>
        </>

    );
}
