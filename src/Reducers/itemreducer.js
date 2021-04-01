export const ItemReducer = (state , action) =>{
    switch (action.type){
        case 'ADD_ITEM' :
            return [...state, {id:Math.random()*10, title: action.item}];
        case 'REMOVE_ITEM':
            return state.filter(item=>item.id!==action.id);
        case 'EDIT_ITEM':
            const newState=state.slice();
            newState[action.item.index]={id:newState[action.item.index].id, title: action.item.content }
            return newState
        default:
            return state    
    }
}