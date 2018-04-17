import React from 'react';
import "./MemoryCard.css";

const MemoryCard = props => (
	<div 
	className="allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3" 
	key={props.id}
	onClick={() => props.handleClick(props.id, props.clicked)}
	>
		<img 
		id={props.name}
		src={props.image}
		alt={props.name}
		/>
	</div>
);

export default MemoryCard;