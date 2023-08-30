import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineArrowRight } from 'react-icons/ai';
import "./OrderSummery.css";



const OrderSummery = ({cart}) => {
    return (
        <div className="order_summery">
                <h2>Order Summery</h2>
                <h3>Selected Items: {cart.length} </h3>
                <h3>Total Shipping Charge: </h3>
                <h3>Tax:</h3>
                <h3>Grand Total: $</h3>
                <button>Clear Cart:<RiDeleteBin6Line></RiDeleteBin6Line></button>
                <button>Review Order<AiOutlineArrowRight></AiOutlineArrowRight></button>
            </div>
    );
};

export default OrderSummery;