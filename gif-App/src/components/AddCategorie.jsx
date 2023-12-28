import React from 'react'
import { useState } from 'react'

export const AddCategorie = ({ onAddCategory }) => {
    const [unpitValue, setUnpitValue] = useState('')

    const onInputChange = (event) => {
        setUnpitValue(event.target.value)

    }
    const onsubmitt = (event) => {
        event.preventDefault()
        console.log(unpitValue)
        if (unpitValue.trim().length <= 1) { return }
        // setCategories(categories=>[unpitValue,...categories])
        onAddCategory(unpitValue.trim())
        setUnpitValue('')
    }


    return (
        <form onSubmit={(event) => onsubmitt(event)}>
            <input
                type='text'
                placeholder='search gifs...'
                value={unpitValue}
                onChange={(event) => { onInputChange(event) }}
            />
        </form>
    )
}
