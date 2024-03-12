import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addItemToLs, getStoredCart, removeFromLs } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])


    // display cart item
    useEffect(() => {
        console.log(bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            // console.log(storedCart, bottles);
            const saveCart = [];
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    saveCart.push(bottle);
                }
            }
            console.log(saveCart);
            setCart(saveCart);
        }


    }, [bottles])

    // purchase button handler
    const handleAddToCart = (bottle) => {
        const newAddToCartBottle = [...cart, bottle];
        setCart(newAddToCartBottle);
        addItemToLs(bottle.id);
    }


    const handleRemoveFromCart = (id) => {
        removeFromLs(id);
            
    }

    return (
        <div >
            <h3>Available Bottles: {bottles.length}</h3>

            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

            <div className="Bottles-Container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;