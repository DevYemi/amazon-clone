export const initialState = {
    basket: [],
}

function reducer (state, action) {
    switch (action.type) {
        case "ADD_TO_BASKET":
            console.log(action.item)
            return {basket: [...state.basket, action.item]};
            
            case "REMOVE_FROM_BASKET":
            
            break;
    
        default:
            return state
    }
}

export default reducer