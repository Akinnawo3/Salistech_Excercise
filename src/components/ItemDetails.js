import React, { useContext, useState } from 'react'
import { ItemContext } from '../context/ItemContext'
import '../css/itemdetails.css'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import $ from "jquery"



const ItemDetails = ({ item, index }) => {
    // destructuring necessary variables
    const [EditValue, setEditValue] = useState("")
    const { dispatch } = useContext(ItemContext)

    // function that shows and hide icons when item edit is about to be carried out
    const handleEditCLick = () => {
        $(".edit")[index].style.display = 'none';
        $(".updateForm").hide();
        $(".updateForm")[index].style.display = 'block';
    }

    // also hides and shows certain icons or elements when the edit operation is cancelled
    const handleEditCancel = () => {
        $(".edit").show();
        $(".updateForm").hide();
    }

    // handles the delete of an item, eventually it dispatches a delete action to the item reducer
    const handleDelete = () => {
        $(".edit").show();
        $(".updateForm").hide();
        dispatch({ type: 'REMOVE_ITEM', id: item.id })
    }

    // function that handles the form submit event during the update of a particular item
    const handleSubmit = (e, index) => {
        e.preventDefault();
        dispatch({ type: 'EDIT_ITEM', item: { index, content: EditValue } })
        setEditValue("");
        $(".updateForm").hide();
        $(".edit").show();
    }
    return (
        <li className="each-item" >
            <div className='title'>
                <div className='title-txt'>
                    {item.title}
                </div>
                <div>
                    {/* icon that shows the edditing form when pressed */}
                    <span className="edit" onClick={() => handleEditCLick(index)}>
                        <AiFillEdit />
                    </span>
                    {/* icon that triggers the delete function when pressed */}
                    <span className="delete" onClick={() => handleDelete(index)} >
                        <AiFillDelete />
                    </span>
                </div>
            </div>
            {/* form that handles the editing of an item , it is hidden by default, only shows when the edit icon is pressed for each item */}
            <div className="updateForm ">
                <form onSubmit={(e) => handleSubmit(e, index)}>
                    <input type="text" value={EditValue} required onChange={(e) => setEditValue(e.target.value)} />
                    <button type="submit" value="Submit">Update</button>
                    <button type="reset" value="Reset" style={{ background: "red" }} onClick={() => handleEditCancel(index)}>Cancel</button>
                </form>
            </div>
        </li>


    )
}

export default ItemDetails