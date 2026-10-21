function HeaderComponentNew({
    iconMenuImg,
    iconCloseImg,
    logoImg,
    cartImg,
    avatarImg,
    showVerticalNavigation,
    handleMenuClick,
    handleCartClick,
    numberOfOrders
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
                                 maskImage: `url(${showVerticalNavigation? 
                                                  iconCloseImg: iconMenuImg})`,
                                 WebkitMaskImage: `url(${showVerticalNavigation? 
                                                  iconCloseImg: iconMenuImg})`}}>
                                            
                        </span>
                    {/*    <img
                            src={
                                showVerticalNavigation
                                    ? iconCloseImg
                                    : iconMenuImg
                            }
                            className="menu-icon-part"
                            alt=""
                        />*/}
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
                   onClick={()=>handleCartClick()}>
                   {/* <img
                        src={cartImg}
                        className="cart-img-part"
                        alt="Image of cart"
                    />*/}
                    <span className="cart-img-part-new"
                       style={{
                              maskImage: `url(${cartImg})`,
                              WebkitMaskImage: `url(${cartImg})`
                             }}>

                    </span>
                    <div className={`circle-orange ${
                      numberOfOrders===0? "circle-orange-hide": ""}`}>
                      <p className="small-white-text">{numberOfOrders}</p>
                    </div>
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