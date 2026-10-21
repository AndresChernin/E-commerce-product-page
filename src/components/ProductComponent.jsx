function ProductComponent({product, minusImg, plusImg,remImg, number, 
                           boxImg,increaseNumber, decreaseNumber,
                           addToCart, removeFromCart}){
    return(
        <section className="product-component-part">
           <div className="product-component-inner-container">
            <h1>{product.firma}</h1> 
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="product-component-price-part">
                <div className="price-part-left-part">
                  <p className="big-black-text">{product.actualPrice}</p>
                  <p className="white-text-black-background">{product.discount}</p>
                </div>
                <div className="price-part-right-part">
                  <p className="cross-out-text">{product.previousPrice}</p>
                </div>
            </div>
            <div className="product-order-part">
                <button className="product-minus-part"
                 onClick={()=>decreaseNumber()}>
                   <span className="minus-icon"
                   style={{
                    maskImage: `url(${minusImg})`,
                    WebkitMaskImage: `url(${minusImg})`
                  }}>

            </span>   
                   {/* <img
                        src={minusImg}
                        className="logo-minus-part"
                        
                    />
                    */}
                </button>
                <p className="product-number-part">{number}</p>
                
                <button className="product-plus-part"
                onClick={()=>increaseNumber()}>
                     <span className="plus-icon"
                       style={{
                              maskImage: `url(${plusImg})`,
                              WebkitMaskImage: `url(${plusImg})`
                             }}>

                    </span>  
                   {/* <img
                        src={plusImg}
                        className="logo-plus-part"
                        
                    />*/}
                </button>
            </div>
            <div className="add-remove-container">
            <button className="add-to-cart-button"
             onClick={()=>addToCart()}>
                    <img
                        src={boxImg}
                        className="box-img-part"
                    />                   
                    <p className="add-to-cart-text">Add to cart</p>
                
            </button>
            <button className="add-to-cart-button"
             onClick={()=>removeFromCart()}>
                    <img
                        src={remImg}
                        className="box-img-part"
                    />                   
                    <p className="add-to-cart-text">Remove from cart</p>
                
            </button>

            </div>    
           </div> 
        </section>
    )
}