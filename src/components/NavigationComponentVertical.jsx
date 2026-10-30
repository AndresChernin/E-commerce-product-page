function NavigationComponentVertical({iconMenuCloseImg,handleButtonClick,showMyself}){
  const closeButtonRef = React.useRef(null);
  const menuRef = React.useRef(null);
    React.useEffect(() => {
    if (!showMyself) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
        if (event.key !== "Tab") return;

        const focusableElements = menuRef.current?.querySelectorAll(
            'button:not(:disabled), a[href], input:not(:disabled)'
        );

        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
        document.removeEventListener("keydown", handleKeyDown);
    };
}, [showMyself]);
    return(
          <div className={`${showMyself?
                  "menu-part-with-close-icon" : "menu-part-with-close-icon-closed"}`}
                id="mobile-navigation">  
                  <button
                    ref={closeButtonRef}
                    className="menu-button"
                    aria-label="Close menu"
                    aria-expanded="true"
                    aria-controls="mobile-navigation"
                    onClick={()=>handleButtonClick()}
                  >
                    
                
                  <span className="menu-icon-close-part-new"
                       style={{
                              maskImage: `url(${iconMenuCloseImg})`,
                              WebkitMaskImage: `url(${iconMenuCloseImg})`
                             }}>

                    </span>  
                       
                  </button>
                  <nav className="links-part-vertical" aria-label="Main navigation">
                  
                       <a href="#">Collections</a>
                       <a href="#">Men</a>
                       <a href="#">Women</a>
                       <a href="#">About</a>
                       <a href="#">Contact</a>
                
                  </nav>
        </div>
    )
}