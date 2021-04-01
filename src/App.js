import React from 'react'
import Nav from './components/Nav'
import './css/app.css'
import AddItem from './components/AddItem'
import ItemList from './components/ItemList'
import ItemContextProvider from './context/ItemContext'


const App = () => {
    return (
        <div className='App'>
            <ItemContextProvider>
                <Nav />
                <ItemList />
                <AddItem />
            </ItemContextProvider>
        </div>
    )
}

export default App



