import React from 'react';

export const Button = (props) => {
    return (
    <button
        className={props.className}
        onClick={() => alert(props.title)}
    >
        {props.title}
    </button>
    )
};