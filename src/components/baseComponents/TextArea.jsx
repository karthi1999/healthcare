import React from 'react'

const TextArea = ({
    id,
    name='',
    className='',
}) => {
    return (
        <textarea
            id={id}
            name={name}
            rows={3}
            className={className}
            defaultValue={''}
        />
    )
}

export default TextArea