import React from 'react';

const SideBar = (props) => {
    	const { locations } = props;
        return ( 
	            <ul className="list-places">
	              {locations.map((local) => (
	              	<li>{local.title}</li>
	              ))}
	            </ul>
	        )
}

export default SideBar