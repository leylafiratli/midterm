import React from 'react';

export default function PageNotFound(props) {
	return (
		<h2>
			 {props.location.pathname} was not found.
		</h2>
	);
}
