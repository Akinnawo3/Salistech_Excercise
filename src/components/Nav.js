import React, { useContext } from 'react'
import { ItemContext } from '../context/ItemContext'
import '../css/nav.css'


//Nav component designed for the purpose of showing the number of items in the list at any point
const Nav =() =>{
const {item} =useContext (ItemContext)
    return (
        <div className='Nav'>   
            <h1>ItemsList</h1>
            <div>You have {item.length} items</div>
        </div>
    )
}
export default Nav