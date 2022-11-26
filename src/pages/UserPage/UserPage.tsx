import React from 'react'

import Image from 'react-bootstrap/Image'
import {BookBoxList} from "../../Components/BookBoxList/BookBoxList";
import {useParams} from "react-router-dom";

export function UserPage()
{
    let userId = useParams();
    return (
        <div>
            <div className=''>
                <Image src={''} className='d-inline-block m-5 col-9 col-md-5' roundedCircle={true}></Image>
                <div className='col-md-5 d-inline-block'>
                    <h2>{}</h2>
                    <p>{}</p>
                </div>
            </div>
            <h2>My books</h2>
            <BookBoxList/>
        </div>
    )
}