import React from 'react';

const SideBar = (props) => {
    	const { locations, query, searchLocations, onSelectPlace, sideBarVisible, toggleSideBar} = props;
        return ( 
        	<div className="App-sidebar">           		
				<div className={(sideBarVisible ? "menu open" : "menu")}>
	           		<div className="search-places-input-wrapper">
		                <input 
		                className="input-search"
		                type="text" 
		                placeholder="Search by name" 
		                aria-label="Search Input"
		                value={query} 
		                onChange={(event) => searchLocations(event.target.value)}
		                />
		            </div>
		            <div> 
			           <ul className="list-places">
			              {locations.length === 0?(<li>No place found</li>):(locations.map((local) => (
	  		              	<li  key={local.title}><a onClick={() => onSelectPlace(local)} className="places" >{local.title}</a></li>
	  		              )))}
			            </ul>
		            </div>
	            	<footer>By Dieter Jackson</footer>
            	</div>
            	<button className={"hamburger hamburger--arrowalt" + (sideBarVisible ? " is-active" : "")} 
           		type="button" 
           		onClick={toggleSideBar}
			    >
				  <span className="hamburger-box">
				    <span className="hamburger-inner"></span>
				  </span>
				</button>
         	</div>
	        )
}


export default SideBar