import React from 'react'

export default function Button(props) {
    const { name } = props
    return (
        <button {...props}>{name}</button>
    )
}
