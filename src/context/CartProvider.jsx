import { useMemo, useState } from "react";
import { CartContext } from "./CartContext";

export default function CartProvider({children}){

    const [state, setState] = useState({
        items : [
            {
            meal : {
                "id" : "item-1",
                "categoryId" : "category-1",
                "name" : "Classic Burger",
                "description" : "A delicious classic burger with lettuce, tomato, and special sauce.",
                "price" : 8.99,
                "featured" : false,
                "imageUrl" : "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
            },
            quantity : 2,
        },
        { meal : {
      "id": "item-4",
      "categoryId": "cat-1",
      "name": "Bacon Deluxe",
      "description": "Premium burger with crispy bacon, avocado, and garlic aioli.",
      "price": 13.99,
      "imageUrl": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400"
        },
        quantity : 3,

    },
    ],
        total : 5,
    });

        const addToCart = (meal, quantity) => {
       setState((oldState)=> ({
        items : [...oldState.items, {meal, quantity}],
        total : oldState.total + quantity,
       }))
    }

    const increaseQuantity = (index) => {
        setState((oldState) => ({
            items : oldState.items.map((item, i) => 
                i === index ? {meal : item.meal, quantity : item.quantity + 1} : item),
            total : oldState.total + 1
        }))
    }

    const decreaseQuantity = (index) => {
         setState((oldState) => ({
            items : oldState.items.map((item, i) => 
                i === index ? {meal : item.meal, quantity : item.quantity - 1} : item),
            total : oldState.total - 1
        }))
    }
    
    const removeItem = (index) => {
        setState((oldState) => {
            const itemForRemoval = oldState.items.find((_, i) => i === index);
            return {
                items : oldState.items.filter((item) => item.meal.id !== itemForRemoval.meal.id),
                total : oldState.total - itemForRemoval.quantity,
            }
        });
    };
    
    const totalPrice = useMemo(() => {
        return state.items.reduce((acc, item) => acc + (item.meal.price) * item.quantity, 0);
    }, [state.items]);

    const clearCart = () => {
        setState({
            items : [],
            total : 0,
        });
    }

    const data ={
        items : state.items,
        total : state.total,
        totalPrice,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart
    };



   return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
   )
}