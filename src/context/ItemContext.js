import React, {createContext, useReducer, useEffect} from 'react'
import { ItemReducer } from '../Reducers/itemreducer'


export const ItemContext= createContext()


const ItemContextProvider = (props)=>{
    const [item, dispatch] = useReducer(ItemReducer, [], ()=>{
        const localData =  localStorage.getItem('items')
        return localData? JSON.parse(localData) : [];
    })

    useEffect(()=>{
        localStorage.setItem('items', JSON.stringify(item))
    })

return( 
    <ItemContext.Provider value={{item, dispatch}}>
        {props.children}
    </ItemContext.Provider>
)
}
export default ItemContextProvider