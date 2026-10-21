function CartComponent({orders, deleteImg, deleteOrder}){
 return(

<section className="cart-component">
 <div className="cart-component-header-part">
    <p className="black-bold-text">
        Cart
    </p>
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