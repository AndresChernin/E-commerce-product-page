
function OpenedLightBoxComponent({product,aktIndex, handleBigImageClick,
                                 handlePrevClick, handleNextClick, 
                                iconPrev, iconNext, setIndex, iconClose,
                                setLightBoxOpen}){
                                  
    const bigImages=product.getBigImages();
    const smallImages=product.getSmallImages();
    const closeButtonRef = React.useRef(null);

React.useEffect(() => {
    // Element merken, das vor dem Öffnen den Fokus hatte
    const previousElement = document.activeElement;

    // Fokus beim Öffnen auf den Schließen-Button setzen
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
        if (event.key === "Escape") {
            setLightBoxOpen(false);
            return;
        }

        if (event.key === "Tab") {
            const focusableElements = document.querySelector(
                '[role="dialog"]'
            )?.querySelectorAll(
                'button:not(:disabled), [href], input:not(:disabled), ' +
                'select:not(:disabled), textarea:not(:disabled), ' +
                '[tabindex]:not([tabindex="-1"])'
            );

            if (!focusableElements?.length) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey &&document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
        document.removeEventListener("keydown", handleKeyDown);

        // Fokus beim Schließen zurückgeben
        if (previousElement instanceof HTMLElement) {
            previousElement.focus();
        }
    };
}, [setLightBoxOpen]);
    return(
        <section
    className="opened-light-box-component-part"
    role="dialog"
    aria-modal="true"
    aria-label="Product image gallery"
>
         <div className="opened-light-box-inner-component">
              <div className="opened-product-image-container">

                 <button
                 ref={closeButtonRef}
                 className="opened-button-for-close-icon"
                 onClick={() => setLightBoxOpen(false)}
                 aria-label="Close product gallery"
                 >
                     <span className="opened-close-icon"
                       style={{
                       maskImage: `url(${iconClose})`,
                       WebkitMaskImage: `url(${iconClose})`
                      }}>

                     </span>  
                   
                 </button>
                 <button className="opened-button-for-product-image"
                 onClick={()=>handleBigImageClick()}>
                 <img
                    src={
                       bigImages[aktIndex]        
                         }
                   className="product-image-part"
                  alt={`${product.getTitle()} - view ${aktIndex + 1}`}          
                 />
               </button>
                <button className="opened-circle-prev-part"
                onClick={()=>handlePrevClick(bigImages)}
                aria-label="Previous product image">
                <span className="opened-prev-icon"
                style={{
                   maskImage: `url(${iconPrev})`,
                   WebkitMaskImage: `url(${iconPrev})`
                 }}>

                 </span>   
            
                 </button>
                <button className="opened-circle-next-part"
                 onClick={()=>handleNextClick(bigImages)}
                 aria-label="Next product image">
                 <span className="opened-next-icon"
                 style={{
                  maskImage: `url(${iconNext})`,
                  WebkitMaskImage: `url(${iconNext})`
                }}>

                </span>
             
               </button>
           </div>
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
                            alt={`${product.getTitle()} - thumbnail ${index + 1}`}
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