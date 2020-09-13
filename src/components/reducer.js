export const initialState = {
    basket: [{
        id: 12345,
        title: "This is the new product that i want you to pay more attention to are you feeling me right now modafucker",
        ratings: 5,
        price: 300,
        image: "https://images-na.ssl-images-amazon.com/images/I/419JyktaYoL._AC_SY400_.jpg",
    }
    ],
}
export const getBasketTotal = (basket) => basket.reduce((amount, item) => item.price + amount, 0)

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return { basket: [...state.basket, action.item] };

        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(item => action.itemId === item.id );
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            return {...state, basket: newBasket}

        default:
            return state
    }
}

export default reducer