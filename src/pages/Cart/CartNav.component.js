import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cartContext from "../../Context/cart-context";

const CartNav = (props) => {
    const navigate = useNavigate();
    const context = useContext(cartContext);
    const [isEditable, setIsEditable] = useState(false);
    const [isCartPage, setIsCartPage] = useState(false);
    const [itemTotal, setItemTotal] =useState(0);
    const [inputData, setInputData] = useState('');

  const sendDataToParent = () => {
    
    props.onData(inputData); 
    console.log(inputData);
  };
    useEffect(() => {
        setIsEditable(props.isEditable);
        setIsCartPage(props.isCartPage);
        setItemTotal(props.itemTotal);
        setInputData(props);
    }, [context]);
    
    const ProceedToCart = () => {
        let user = localStorage.getItem("user");
        if(user !== undefined){
            navigate("/Checkout");
        }else{
            navigate("/Login");
        }
        
    };
    return (
        <>
           
                    <div className="container">
                        <div className="row">
                            {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
                            {context.cart.length > 0 && (
                                <div className="col-md-12">
                                    <div className="ritekhana-recet-order-list">
                                        <table id="cart_table">
                                            <thead>
                                                <tr>
                                                    <th>Item Name</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    <th>Total</th>
                                                    {isEditable && <th></th>}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {context.cart.map((cartItem, index) => (
                                                    <tr key={index}>
                                                        <td>{cartItem.Item_Name}</td>
                                                        {isEditable && (
                                                            <td className="product-quantity" data-title="quantity">
                                                                <div className="item_qty buttons_added">
                                                                    <span className="wi-33">
                                                                        {" "}
                                                                        <a
                                                                            onClick={context.updateItemInCart.bind(this, cartItem._id, "REMOVE")}
                                                                            className="minus count_action"
                                                                        >
                                                                            <i className="fa fa-minus"></i>
                                                                        </a>
                                                                    </span>
                                                                    <span className="wi-33 pdg-l-r-5-pct">
                                                                        {cartItem.quantity}
                                                                    </span>
                                                                    <span className="wi-33">
                                                                        {" "}
                                                                        <a
                                                                            onClick={context.updateItemInCart.bind(this, cartItem._id, "ADD")}
                                                                            className="plus count_action"
                                                                        >
                                                                            <i className="fa fa-plus"></i>
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        )}
                                                        {!isEditable && (
                                                            <td>
                                                                <span className="subtotal">{cartItem.quantity}</span>
                                                            </td>
                                                        )}
                                                        <td>
                                                            ₹ <span className="subtotal">{cartItem.Selling_Price}</span>
                                                            <input type="hidden" name="rowid" value={cartItem.Selling_Price}></input>
                                                        </td>
                                                        <td>
                                                            ₹ <span className="subtotal">{(cartItem.quantity * cartItem.Selling_Price).toFixed(2)}</span>
                                                            <input
                                                                type="hidden"
                                                                name="price"
                                                                value={cartItem.quantity * cartItem.Selling_Price}
                                                            ></input>
                                                        </td>
                                                        {isEditable && (
                                                            <td>
                                                                <a href="javascript:;" onClick={context.removeItemFromCart.bind(this, cartItem._id)}>
                                                                    <i className="fa fa-trash" style={{ color: "red" }}></i>
                                                                </a>
                                                            </td>
                                                        )}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <h5 className="text-right">
                                        TOTAL ₹{" "}
                                        <span className="final_total">
                                                {
                                                    context.total =  context?.cart.length ? context.cart.reduce((acc, item) => acc + item.quantity * item.Selling_Price, 0).toFixed(2)
                                                    : Number(0).toFixed(2)
                                                }
                                        </span>
                                    </h5>
                                    {isEditable && (isCartPage) &&  (
                                        <div className="ritekhana-listing-loadmore-btn">
                                            <a href="#!" onClick={ProceedToCart} className="ritekhana-bgcolor">
                                                Proceed to Checkout
                                            </a>
                                        </div>
                                    )}
                                    &nbsp;
                                </div>
                            )}
                        </div>
                    </div>
              
        </>
    );
};

export default CartNav;
