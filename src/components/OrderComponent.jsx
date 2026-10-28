function OrderComponent({order, deleteIcon, deleteOrder}){
    return(
        <div className="order-part">
            <img src={order.getImage()}
             className="order-part-image"
             alt=""/>
            <div className="product-description">
                <p>{order.getTitle()}</p>
                <div className="order-part-price-part">
                     <p>{order.getActPrice_andNumber()}</p>
                     <p className="black-bold-text">{order.getTotalPrice()}</p>
                </div>
            </div>
            <button className="order-part-delete-button"
                    onClick={()=>deleteOrder(order.getId())}
                     aria-label={`Remove ${order.getTitle()} from cart`}>
                   
                <span className="order-part-delete-img-new"
                       style={{
                              maskImage: `url(${deleteIcon})`,
                              WebkitMaskImage: `url(${deleteIcon})`
                             }}>

                    </span>
            </button>
        </div>
    )
}