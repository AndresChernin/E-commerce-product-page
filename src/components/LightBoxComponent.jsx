function LightBoxComponent({iconPrev, iconNext, product,aktIndex,
                            handleBigImageClick, handlePrevClick, handleNextClick,
                            setIndex}){
    const images=product.getBigImages();
    const smallImages=product.getSmallImages();
    
    return (
        <section className="light-box-component">
            <button className="button-for-product-image"
             onClick={()=>handleBigImageClick()}>
            <img
                src={
                       images[aktIndex]        
                    }
                className="product-image-part"
                alt={`${product.getTitle()} - view ${aktIndex + 1}`}                           
            />
            </button>
            <button className="circle-prev-part"
             onClick={()=>handlePrevClick(images)}
             aria-label="Previous product image">
             <span className="prev-icon"
             style={{
                  maskImage: `url(${iconPrev})`,
                  WebkitMaskImage: `url(${iconPrev})`
               }}>

            </span>   
             
            </button>
            <button className="circle-next-part"
            onClick={()=>handleNextClick(images)}
            aria-label="Next product image">
                <span className="next-icon"
                style={{
                  maskImage: `url(${iconNext})`,
                  WebkitMaskImage: `url(${iconNext})`
                }}>

                </span>
              
            </button>
            <div className="all-small-images">
            {smallImages.map((image, index) => (
                    <button
                        className={`thumbnail-img-part 
                                    ${aktIndex===index? "clicked-button-for-small-image" :""}`}   
                        key={image}
                        onClick={() => setIndex(index)}
                    >
                        <img
                            src={image}
                            alt={`${product.getTitle()} - thumbnail ${index + 1}`}
                          className={`small-image 
                                    ${aktIndex===index? "clicked-small-image" :""}`} 
                          />
                    </button>
                ))}
                </div>
        </section>
    )
}