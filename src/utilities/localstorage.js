// for check local storage that have any item named cart or not if have then convert that item in json stringify and return,  if not then return empty array //
const getStoredCart = () => {
    const isStored = localStorage.getItem('cart');
    if (isStored) {
        return JSON.parse(isStored);
    }
    return [];
}

// add item to the cart
const addItemToLs = (id) => {
    const cart = getStoredCart();
    cart.push(id);
    saveItemToLs(cart);

}

// set cart item to local storage
const saveItemToLs = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}


// remove from local storage 
const removeFromLs = (id) => {
    const cart = getStoredCart();
    const remaining = cart.filter(cartItemId => cartItemId !== id);
    saveItemToLs(remaining);
}

export { addItemToLs, getStoredCart, removeFromLs }