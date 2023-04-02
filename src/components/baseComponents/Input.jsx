import React from 'react'

const Input = ({
    type,
    name = '',
    id,
    className = '',
    placeholder = '',
}) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            className={`${className}`}
            placeholder={placeholder}
        />
    )
}

export default Input