import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineArrowRight } from 'react-icons/ai';
import "./OrderSummery.css";



const OrderSummery = ({cart, handleClearCart}) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart){
        // quantity = quantity + product.quantity;
        total = total + (product.price * product.quantity);
        shipping = shipping + (product.shipping);
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    


    return (
        <div className="order_summery">
                <h2>Order Summery</h2>
                <h3>Selected Items: {cart.length} </h3>
                <h3>Total Shipping : ${total} </h3>
                <h3>Total Shipping Charge: ${shipping}</h3>
                <h3>Tax: ${tax}</h3>
                <h3>Grand Total: ${grandTotal}</h3>
                <button onClick={()=>handleClearCart()}>Clear Cart:<RiDeleteBin6Line></RiDeleteBin6Line></button>
                <button>Review Order<AiOutlineArrowRight></AiOutlineArrowRight></button>
            </div>
    );
};

export default OrderSummery;