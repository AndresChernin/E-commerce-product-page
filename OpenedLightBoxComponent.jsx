function OpenedLightBoxComponent({product,aktIndex, handleBigImageClick,
                                 handlePrevClick, handleNextClick, 
                                iconPrev, iconNext, setIndex, iconClose,
                                setLightBoxOpen}){
    const bigImages=product.getBigImages();
    const smallImages=product.getSmallImages();
    return(
        <section className="opened-light-box-component-part">
         <div className="opened-light-box-inner-component">
            <div className="opened-close-sign-container">
                <button className="opened-button-for-close-icon"
                onClick={()=>setLightBoxOpen(false)}>
                     <span className="opened-close-icon"
                       style={{
                       maskImage: `url(${iconClose})`,
                       WebkitMaskImage: `url(${iconClose})`
                      }}>

                    </span>  
                    {/* <img src={iconClose}
                     className="opened-close-icon"/>
                     */}
                </button>
            </div>  
            <button className="opened-button-for-product-image"
             onClick={()=>handleBigImageClick()}>
            <img
                src={
                       bigImages[aktIndex]        
                    }
                className="product-image-part"
                            
            />
            
            <button className="opened-circle-prev-part"
             onClick={()=>handlePrevClick(bigImages)}>
             <span className="opened-prev-icon"
             style={{
                  maskImage: `url(${iconPrev})`,
                  WebkitMaskImage: `url(${iconPrev})`
               }}>

            </span>   
             {/* <img
                src={
                     iconPrev           
                    }
                
                            
            />  */}
            </button>
            <button className="opened-circle-next-part"
            onClick={()=>handleNextClick(bigImages)}>
                <span className="opened-next-icon"
                style={{
                  maskImage: `url(${iconNext})`,
                  WebkitMaskImage: `url(${iconNext})`
                }}>

                </span>
              {/*<img
                src={
                     iconNext           
                    }
                
                            
            /> */} 
            </button>
            </button>
            <div className="all-small-images">
            {smallImages.map((image, index) => (
                    <button
                        className={`opened-thumbnail-img-part 
                                    ${aktIndex===index? "opened-clicked-button-for-small-image" :""}`}   
                        key={image}
                        onClick={() => setIndex(index)}
                    >
                        <img
                            src={image}
                            alt={`Product ${index + 1}`}
                          className={`opened-small-image 
                                    ${aktIndex===index? "clicked-small-image" :""}`} 
                          />
                    </button>
                ))}
                </div> 
         </div> 
        </section>
    )
}