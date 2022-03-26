// use local storage to manage cart data
const addToDb = id =>{
    let travelCart = {};

    //get the travel cart from local storage
    const storedCart = localStorage.getItem('travel-cart');
    if(storedCart){
        travelCart = JSON.parse(storedCart);
    }
    // add quantity
    const quantity = travelCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        travelCart[id] = newQuantity;
    }
    else{
        travelCart[id] = 1;
    }
    localStorage.setItem('travel-cart', JSON.stringify(travelCart));
}

const getStoredCart = () =>{
    let travelCart = {};

    //get the travel cart from local storage
    const storedCart = localStorage.getItem('travel-cart');
    if(storedCart){
        travelCart = JSON.parse(storedCart);
    }
    return travelCart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('travel-cart');
    if(storedCart){
        const travelCart = JSON.parse(storedCart);
        if(id in travelCart){
            delete travelCart[id];
            localStorage.setItem('travel-cart', JSON.stringify(travelCart));
        }
    }
}

const deletetravelCart = () =>{
    localStorage.removeItem('travel-cart');
}

export {
    addToDb, 
    getStoredCart,
    removeFromDb,
    deletetravelCart
}