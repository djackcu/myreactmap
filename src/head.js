import React from 'react';

const Head = (props) => {
    	const { toggleSideBar, sideBarVisible} = props;
        return ( 
        	<header className="App-header">
		        <div className="burger-button">
			        <button className={"hamburger hamburger--arrowalt" + (sideBarVisible ? " is-active" : "")} 
			              type="button" 
			              onClick={toggleSideBar}
			          >
			          <span className="hamburger-box">
			            <span className="hamburger-inner"></span>
			          </span>
			        </button>
		        </div>
		          <h1 className="App-title">Welcome to Old Havana City</h1>
        	</header>
        
	        )
}


export default Head