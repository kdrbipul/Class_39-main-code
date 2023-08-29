import { useEffect, useState } from "react";
import Product from "../product/Product";
import "./shop.css"
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineArrowRight } from 'react-icons/ai';


const Shop = () => {

    const [products, setProducts] = useState([])
    // console.log(products);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    // console.log(products);


    return (
        <div className="shop">
            <div className="products_container">
                <div className="products">
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>
            <div className="order_summery">
                <h2>Order Summery</h2>
                <h3>Selected Items: 6</h3>
                <h3>Total Shipping Charge:</h3>
                <h3>Tax:</h3>
                <h3>Grand Total: $1559</h3>
                <button>Clear Cart:<RiDeleteBin6Line></RiDeleteBin6Line></button>
                <button>Review Order<AiOutlineArrowRight></AiOutlineArrowRight></button>
            </div>
        </div>
    );
};

export default Shop;