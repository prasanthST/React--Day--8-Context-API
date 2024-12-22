import { createContext, useState } from "react";
import data from '../Product';

const ProductContext = createContext();

const DataProvider = ({ children }) => {    
    const [products, setProducts] = useState(data);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addCart = (product) => {
        const existProduct = cart.find(item => item.id === product.id);
        
        if (existProduct) {
            const updatedCart = cart.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id));
    };

    return (
        <ProductContext.Provider 
            value={{ products, setProducts, cart, setCart, total, setTotal, removeCart, addCart }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, DataProvider };
