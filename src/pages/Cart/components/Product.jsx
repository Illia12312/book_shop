import './Product.css';
import cross from "../../../img/icons/closer.svg";
import { useDispatch, useSelector } from 'react-redux';
import { removeCartAction } from '../../../redux-store/cart/actions';

const Product = ({name, author, count, price, img}) =>{
    const dispatch = useDispatch();
    const deleteFunc = (img) =>{
        dispatch(removeCartAction(img));
    }

    return(
        <section className="product">
            <div className="productImgg"><img src={img} alt="Apple watch"/></div>
            <div className="productTitle">{name}</div>
            <div className="productCountСart">
                <div className="countCart">
                    {count} ШТ.
                </div>
            </div>
            <div className="productPrice">{price} грн.</div>
            <div className="productControls">
                <button type="button" className='buttonImg' onClick={() => deleteFunc(img)}>
                    <img src={cross} alt="Delete"/>
                </button>
            </div>
        </section>
    )
}

export default Product;