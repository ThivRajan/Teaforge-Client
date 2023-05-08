import React from 'react';
import './Loader.css';

const Loader = () => {
	return (
		<div className="loading">
			Waiting for server
			<span className="dot-1">.</span>
			<span className="dot-2">.</span>
			<span className="dot-3">.</span>
		</div>
	);
};

export default Loader;
