import React, { useState, useContext } from 'react'
import { ItemContext } from '../context/ItemContext'
import '../css/addItem.css'



// component that contains the form where fresh items are added to the list
const AddItem = () => {
    const [title, setTitle] = useState('')
    const { item, dispatch } = useContext(ItemContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.length >= 10) {
            alert("cannot add more than 10 items")
        } else {
            dispatch({ type: 'ADD_ITEM', item: title })
        }
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} className='add-item'>
            <input type='text' value={title} placeholder='Item Name' onChange={(e) => setTitle(e.target.value)} required />
            <input type='submit' />
        </form>
    )
}
export default AddItem