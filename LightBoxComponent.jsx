function LightBoxComponent({images,iconPrev, iconNext, product,
                            handleBigImageClick}){
    
    const smallImages=product.getSmallImages();
    const[aktIndex, setIndex]=React.useState(0);
    function handleNextClick(){
        console.log("click!");
        let nextIndex=0;
       if(aktIndex===images.length-1){
          nextIndex=0;
       }
       else{
        nextIndex=aktIndex+1;
       }
       setIndex(nextIndex);
    }
    function handlePrevClick(){
        console.log("click!");
        let nextIndex=0;
       if(aktIndex===0){
          nextIndex=images.length-1;
       }
       else{
        nextIndex=aktIndex-1;
       }
       setIndex(nextIndex);
    }
    return (
        <section className="light-box-component">
            <button className="button-for-product-image"
             onClick={()=>handleBigImageClick()}>
            <img
                src={
                       images[aktIndex]        
                    }
                className="product-image-part"
                            
            />
            </button>
            <button className="circle-prev-part"
             onClick={()=>handlePrevClick()}>
             <span className="prev-icon"
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
            <button className="circle-next-part"
            onClick={()=>handleNextClick()}>
                <span className="next-icon"
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
                            alt={`Product ${index + 1}`}
                          className={`small-image 
                                    ${aktIndex===index? "clicked-small-image" :""}`} 
                          />
                    </button>
                ))}
                </div>
        </section>
    )
}