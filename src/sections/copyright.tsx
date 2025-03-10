import React from "react";


export const Copyright = () => {
	return (
		<div style={style}>
			Atlas Chicken Games, LLC. &copy; 2025
		</div>
	);
};

const style : React.CSSProperties = {
	textAlign: "right",
	paddingRight: "32px",
	bottom: "32px",
	color: "white",
	opacity: 0.8,
	fontWeight: "bold",
	fontSize: "1.5em",
	textTransform: "uppercase",
	whiteSpace: "nowrap",
};