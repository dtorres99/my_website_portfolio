import React from "react";
import EmbedItem from "./EmbedItem";
import "./home.css";

function Home() {
	const videoWidth = 400;
	return (
		<div className="Home" id="Page">
			<EmbedItem
				src="https://www.youtube.com/embed/TFHPFltoJO4"
				title="Haas Automation, Inc"
				width={videoWidth}
				caption="I coded a Nachi robot to interact with 
				a HAAS CNC Lathe to pick up parts from a tray, 
				have one side of it cut down to shape, then flip 
				the part so the opposite side can be lathed. No 
				actual cutting occured in this video sample."
			/>
			<EmbedItem
				src="https://www.youtube.com/embed/1Dp1Uwp6pMk"
				title="Team 696"
				width={videoWidth}
				caption="On FRC Team 696, I was the head programmer 
				of the team. I worked with a small team of developers
				to get our competition robot capable of performing 
				tasks autonomously and then be remotely controlled by 
				the driver(me) of the robot. This video shows a 
				recap of the 2017 LA Regional competition where we 
				won first place and moved up to championships for the 
				first time in our teams' history."
			/>
		</div>
	);
}

export default Home;
