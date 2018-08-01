import React from 'react';

const SideBar = (props) => {
    	const { locations, query, searchLocations } = props;
        return ( 
        	<div className="sidebar" >
        	<div className="search-places-input-wrapper">
                <input type="text" 
                placeholder="Search by name" 
                value={query} 
                onChange={(event) => searchLocations(event.target.value)}
                />
              </div>
	            <ul className="list-places">
	              {locations.map((local) => (
	              	<li  key={local.title}>{local.title}</li>
	              ))}
	            </ul>
	         </div>
	        )
}


export default SideBar