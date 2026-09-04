function NavigationComponentVertical({iconMenuCloseImg,handleButtonClick,showMyself}){
    return(
          <div className={`${showMyself?
                  "menu-part-with-close-icon" : "menu-part-with-close-icon-closed"}`}
                id="mobile-navigation">  
                  <button
                    className="menu-button"
                    aria-label="Close menu"
                    aria-expanded="true"
                    aria-controls="mobile-navigation"
                    onClick={()=>handleButtonClick()}
                  >
                  {/*<img
                   src={iconMenuCloseImg}
                   className="<span className="cart-img-part-new"
                       style={{
                              maskImage: `url(${cartImg})`,
                              WebkitMaskImage: `url(${cartImg})`
                             }}>

                    </span>"
                   alt=""
                   />*/}
                   <span className="cart-img-part-new"
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