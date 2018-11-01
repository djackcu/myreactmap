import React from 'react';

const Head = (props) => {
    	const { toggleSideBar, sideBarVisible} = props;
        return ( 
        	<header className="App-header">
		        <div className="burger-button">
			        <div className={"hamburger hamburger--arrowalt" + (sideBarVisible ? " is-active" : "")} 
			              role="button" 
			              onClick={toggleSideBar}
			          >
			          <div className="hamburger-box">
			            <div className="hamburger-inner"></div>
			          </div>
			        </div>
		        </div>
		          <h1 className="App-title">Welcome to Old Havana City</h1>
        	</header>
        
	        )
}


export default Head