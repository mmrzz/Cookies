import React from "react";

type props = {
	service: string;
	color: {
		hue: string;
		darkness: number;
	};
};

function Service({ service, color }: props) {
	const { hue, darkness } = color;
	return (
		<div className={`flex-1 bg-${hue + "-" + darkness} rounded-2xl p-4`}>
			{service}
		</div>
	);
}

export default Service;
