import React,{ useContext } from 'react';
import './productcard.css';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from 'react-router-dom';


const ProductCard = ({ name, price, size, id, brand, src }) => {

    console.log(name, price, id);   

    const { cartlist, addProductToProductlist } = useContext(GlobalContext);
    const history = useHistory();

    const updateProductList = () => {
        const newProductObj = {
            name, price, size, id, brand, src,
            count:1
        }
        addProductToProductlist(newProductObj);
        history.push("/cart");

    }

    return ( 
        <div className="product__container">
            <div className="prodcut__container__img">
                <img src= {src} alt={name} />
            </div>
            <div className="product-desc-container-parent"> 
                <div className="product__container__desc">
                    <h4>{name}</h4>
                    <p>size:{size}</p>
                    <p><span>price:{price}</span></p>
                    <p>brand:{brand}</p>
                </div>
                <div className="btn-cart"> 
                    <Button style={{ backgroundColor:"#fb641b", color:"#fff" }}
                     startIcon={<ShoppingCartIcon />}
                     onClick={updateProductList}
                    >cart</Button>
                </div>
            </div>
           
        </div>
     );
}
 
export default ProductCard;