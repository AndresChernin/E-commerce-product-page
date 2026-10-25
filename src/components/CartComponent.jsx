function CartComponent({orders, deleteImg, deleteOrder, iconMenuCloseImg, closeCart}){
 return(

<section className="cart-component">
 <div className="cart-component-header-part">
    <p className="black-bold-text semi-big">
        Cart
    </p>
    <button
                    className="menu-button-cart cart-close"
                    aria-label="Close menu"
                    aria-expanded="true"
                    aria-controls="mobile-navigation"
                    onClick={()=>closeCart()}
                  >
                  <span className="menu-icon-cart-close-part-new"
                       style={{
                              maskImage: `url(${iconMenuCloseImg})`,
                              WebkitMaskImage: `url(${iconMenuCloseImg})`
                             }}>

                    </span>  
     
   </button>  
 </div>
 <div className="cart-component-lower-part">
    <div className="cart-component-product-part">
        {orders.length === 0 ? (
                    <p>your cart is empty</p>
                ) : (
                    <OrderComponent order={orders[0]}
                                    deleteIcon={deleteImg}
                                    deleteOrder={deleteOrder}/>
                )}
   </div>
 <div className="cart-component-payment-part">
       {orders.length > 0 && (
                    <button className="payment-button-part">
                        <p className="add-to-cart-text">
                            Checkout
                        </p>
                    </button>
                )}
 </div>
 </div>
</section>
)
}