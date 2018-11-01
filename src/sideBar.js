import React from 'react';
//Component to visualize sidebar. It's visible with the boolean sideBarVisible that is toggle by a button in the headbar
const SideBar = (props) => {
    	const { locations, query, searchLocations, onSelectPlace, sideBarVisible} = props;
        return ( 
        	<div className={"App-sidebar" + (sideBarVisible ? " open" : " close")}>           		
				<div className= "menu">
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
	           			<ul className="list-places">
			              {locations.length === 0?(<li>No place found</li>):(locations.map((local) => (
	  		              	<li  key={local.title} 
	  		              		tabIndex={0}
								role="button"
	  		              		onClick={() => onSelectPlace(local)} 
	  		              		className="places">
	  		              		{local.title}
	  		              	</li>
	  		              )))}
			            </ul>		            
	            	<footer className="author">By Dieter Jackson</footer>
            	</div>
            	
         	</div>
	        )
}


export default SideBar