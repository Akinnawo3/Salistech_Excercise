import React, { useContext } from 'react'
import { ItemContext } from '../context/ItemContext'
import '../css/itemlist.css'
import ItemDetails from './ItemDetails'


const ItemList = () => {



    const { item } = useContext(ItemContext)
    return (
        <div className='itemlist'>
            <ul>
            {/* maps through the list of all items and return an item detai component for each */}
                {
                    item.length ? item.map((item, index) => <ItemDetails item={item} index={index} key={item.id} />) : <p style={{ color: 'white' }}>Item List Empty </p>
                }
            </ul>
        </div>
    )
}
export default ItemList