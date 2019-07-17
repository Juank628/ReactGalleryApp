import React from 'react'

export default function Photo(props) {
    return (
        <li>
            <img src={props.url} alt={props.alt} />
        </li>
    )
}
