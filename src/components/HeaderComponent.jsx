function HeaderComponent({
    iconMenuImg,
    iconCloseImg,
    logoImg,
    cartImg,
    avatarImg,
    showVerticalNavigation,
    handleMenuClick,
    handleCartClick,
    numberOfOrders,
    cartOpen
}) {

    return (
        <header className="header-part">
            <div className="header-part-inner-container">

                <div className="header-left-part">

                    <button
                        className={`${showVerticalNavigation?
                  "menu-button-closed" : "menu-button"}`}
                        aria-label={
                            showVerticalNavigation
                                ? "Close menu"
                                : "Open menu"
                        }
                        aria-expanded={showVerticalNavigation}
                        aria-controls="mobile-navigation"
                        onClick={handleMenuClick}
                    >
                        <span
                         className="menu-icon-part-new"
                         style={{
                          "--icon-url": `url(${showVerticalNavigation
                                         ? iconCloseImg
                                         : iconMenuImg})`
                                }}
                        >                    
                        </span>
                       
                    </button>

                    <img
                        src={logoImg}
                        className="logo-part"
                        alt="sneakers"
                    />

                    <NavigationComponentHorizontal />

                </div>

                <NavigationComponentVertical
                    iconMenuCloseImg={iconCloseImg}
                    handleButtonClick={handleMenuClick}
                    showMyself={showVerticalNavigation}
                />

                <div className="header-right-part">
                  <button className="button-for-cart"
                   onClick={()=>handleCartClick()}
                   aria-label="Shopping cart"
                   aria-expanded={cartOpen}
                    aria-controls="cart-panel">
                  
                  <span
                     className="cart-img-part-new"
                     style={{
                             "--icon-url": `url(${cartImg})`
                            }}
                  >
                 </span>
                    <div className={`circle-orange ${
                      numberOfOrders===0? "circle-orange-hide": ""}`}
                      aria-live="polite"
                      aria-atomic="true">
                      <p className="small-white-text">{numberOfOrders}</p>
                    </div>
                    <span className="visually-hidden" aria-live="polite" aria-atomic="true">
                          Cart updated: {numberOfOrders} items
                    </span>
                   </button>
                   
                    <img
                        src={avatarImg}
                        className="avatar-img-part"
                        alt="image of man"
                    />
                   
                    
                </div>

            </div>
        </header>
    );
}