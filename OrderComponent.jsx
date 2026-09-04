function OrderComponent({order, deleteIcon, deleteOrder}){
    return(
        <div className="order-part">
            <img src={order.getImage()}
             className="order-part-image"/>
            <div className="product-description">
                <p>{order.getTitle()}</p>
                <div className="order-part-price-part">
                     <p>{order.getActPrice_andNumber()}</p>
                     <p className="black-bold-text">{order.getTotalPrice()}</p>
                </div>
            </div>
            <button className="order-part-delete-button"
                    onClick={()=>deleteOrder(order.getId())}>
               {/* <img src={deleteIcon}
                className="order-part-delete-img"/>
                */}
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