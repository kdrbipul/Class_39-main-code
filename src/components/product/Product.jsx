import { BsCart4 } from 'react-icons/bs';
import "./product.css"

// eslint-disable-next-line react/prop-types
const Product = ({product,handleAddToCart}) => {
    // console.log(product);

    const{img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <img className='product_img' src={img}/>
            <h3 className='product_name'>{name}</h3>
            <h3 className='product_price'>Price : ${price}</h3>
            <p className='product_brand'>Manufactoring : {seller}</p>
            <p className='product_ratings'>Ratings: {ratings}</p>
            <button className='product_btn' onClick={()=>handleAddToCart(product)}>Add To Cart <BsCart4></BsCart4></button>
        </div>
    );
};

export default Product;