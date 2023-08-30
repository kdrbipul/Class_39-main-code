import { useEffect, useState } from "react";
import OrderSummery from "../OrderSummery/OrderSummery";
import Product from "../product/Product";
import "./shop.css"



const Shop = () => {

    const [products, setProducts] = useState([])
    // console.log(products);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    // console.log(products);

    const [cart, setCart]= useState([])

    const handleAddToCart=(product)=>{
        // console.log(product);
        const newCart=[...cart, product];
        setCart(newCart)
    }
    // console.log(cart);

    const handleClearCart=()=>{
        // console.log("clear");
        setCart([])
        

    }
    

    return (
        <div className="shop">
            <div className="products_container">
                <div className="products">
                    {
                        products.map(product => <Product handleAddToCart={handleAddToCart} key={product.id} product={product}></Product>)
                    }
                </div>
            </div>
            <OrderSummery cart={cart} handleClearCart={handleClearCart}></OrderSummery>
        </div>
    );
};

export default Shop;