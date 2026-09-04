function HeaderComponent2({logoImg,iconMenuImg,iconMenuCloseImg, 
                          showMenuIcon, handleButtonClick}){
    return(
        <header className="header-part">
            <img src={logoImg}
            className="logo-part"
            alt="W.Neues"/>
            <div className="menu-part-container"
            id="mobile-navigation">
             {showMenuIcon &&   
             <button
                className="menu-button"
                aria-label="Open menu"
                aria-expanded="false"
                aria-controls="mobile-navigation"
                onClick={handleButtonClick}
              >
             <img
              src={iconMenuImg}
             className="menu-icon-part"
             alt=""
            />      
             </button>
             }
             {!showMenuIcon && 
                <div className="menu-part-with-close-icon"
                id="mobile-navigation">  
                  <button
                    className="menu-button"
                    aria-label="Close menu"
                    aria-expanded="true"
                    aria-controls="mobile-navigation"
                    onClick={handleButtonClick}
                  >
                  <img
                   src={iconMenuCloseImg}
                   className="menu-icon-close-part"
                   alt=""
                   />      
                  </button>
                  <nav className="links-part-vertical" aria-label="Main navigation">
                  
                  <a href="#">Home</a>
                  <a href="#">New</a>
                  <a href="#">Popular</a>
                  <a href="#">Trending</a>
                 <a href="#">Categories</a>
                
             </nav>
                 </div>
             }
                <nav className="links-part" aria-label="Main navigation">
                  
                  <a href="#">Home</a>
                  <a href="#">New</a>
                  <a href="#">Popular</a>
                  <a href="#">Trending</a>
                 <a href="#">Categories</a>
                
             </nav>
            </div>
        </header>
    )
}