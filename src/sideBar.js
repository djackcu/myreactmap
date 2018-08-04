import React from 'react';

const SideBar = (props) => {
    	const { locations, query, searchLocations,selectedPlace,onSelectPlace,onCloseClicked } = props;
        return ( 
        	<div className="App-sidebar" >
        		<div className="search-places-input-wrapper">
	                <input 
	                className="input-search"
	                type="text" 
	                placeholder="Search by name" 
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
	            <div className="description" onClick={() => onCloseClicked()}>
	            	<p>{selectedPlace&&selectedPlace.content}</p>
	            </div>
	            <footer>By Dieter Jackson</footer>
	         </div>
	        )
}


export default SideBar