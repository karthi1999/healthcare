import React from 'react'

const Input = ({
    type,
    name='',
    id,
    className='',
}) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            className={`${className}`}
        />
    )
}

export default Input