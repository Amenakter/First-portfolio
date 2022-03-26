//to localstorage to manage cart data
const addToDatabase = id => {
    
    let shoppingCart;

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = parseInt(quantity )+ 1;
        shoppingCart[id] = newQuantity; 
    }
    else {
        shoppingCart[id] = 1
        
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart)
    )
}
const removeFromDB = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

        }
    
        
    }
}
export { addToDatabase,removeFromDB };