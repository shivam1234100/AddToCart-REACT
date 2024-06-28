import { useDispatch, useSelector } from "react-redux";

function ReduxAddToCart ({ product }){

    const dispatch = useDispatch();

    function increase() {
        dispatch({ type: "ADD_TO_CART", payload: product });
    }
    function decrease() {
        dispatch({ type: "REMOVE_FROM_CART", payload: product });
    }

    let state = useSelector((state) => {
        return state.items;
    })

    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
     )  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>

            </div>
        )
    }
}

export default ReduxAddToCart;