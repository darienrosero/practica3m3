import React from 'react'

const Input = ({id, value, name, onChange}) => {
    return (
        <label htmlFor={id} >
            <input name={name} value={value} onChange={onChange} className={id} id={id} type="number" />
        </label>
    )
}

export default Input
