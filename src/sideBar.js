import React from 'react';

const SideBar = (props) => {
    	const { locations, query, searchLocations,content,onSelectPlace } = props;
        return ( 
        	<div className="sidebar" >
        	<div className="search-places-input-wrapper">
                <input type="text" 
                placeholder="Search by name" 
                value={query} 
                onChange={(event) => searchLocations(event.target.value)}
                />
              </div>
	           <div> 
		           <ul className="list-places">
		              {locations.map((local) => (
		              	<li  key={local.title}><a onClick={() => onSelectPlace(local)}>{local.title}</a></li>
		              ))}
		            </ul>
	            </div>
	            <div>
	            	<p>{content}</p>
	            </div>
	         </div>
	        )
}


export default SideBar