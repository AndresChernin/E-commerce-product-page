function HeaderComponent({iconMenuImg,iconCloseImg,logoImg, cartImg,
                          avatarImg, showVerticalNavigation,
                          handleMenuClick}){
    return(
        <header className="header-part">
            <div className="header-part-inner-container">
             {!showVerticalNavigation && 
              <div className="header-left-part">
                  <button 
                   className="menu-button"
                   aria-label="Close menu"
                   aria-expanded="true"
                   aria-controls="mobile-navigation"
                   onClick={()=>handleMenuClick()}>
                 <img
                    src={iconMenuImg}
                    className="menu-icon-part"
                    alt=""/> 
                </button>  
                 <img src={logoImg}
                    className="logo-part"
                    alt="sneakers"/>
                <NavigationComponentHorizontal />
             </div>
             }
             {showVerticalNavigation &&
                <NavigationComponentVertical 
                iconMenuCloseImg={iconCloseImg}
                handleIconClick={handleMenuClick}
                showMyself={showVerticalNavigation}
                />
             }
             <div className="header-right-part">
                 <img
                    src={cartImg}
                    className="cart-img-part"
                    alt="Image of cart"/>
                 <img src={avatarImg}
                    className="avatar-img-part"
                    alt="image of man"/>
             </div>
            </div>
        </header>
    )
}