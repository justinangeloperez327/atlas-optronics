import React from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";

const GoogleMap = () => {
	return (
		<>
			<GoogleMapsEmbed
				apiKey="XYZ"
				mode="place"
				q="Brooklyn+Bridge,New+York,NY"
				style={""}
				allowfullscreen={false}
				loading={"eager"}
			/>
		</>
	);
};

export default GoogleMap;
