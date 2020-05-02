import React from "react";
import "./About.css";

function About() {
	return (
		<div className="About" id="Page">
			<h1>Daniel Torres</h1>
			<div>
				<img
					src="https://lh3.googleusercontent.com/3Tg7KRRLhvnqdL5efqpMUW-uWNU7AyaYg16VojkCzGcy0nUkidsPASYosvFvYWlkrCqebGNfta43co3QneoPh3zvIrk1vWViMuJb1qk7BP5Vf9cK8VzC0CyVvzuK_YvcLz-BWd-MsX4=w2400"
					className="profile-picture"
					alt="profile"
				/>
				<p className="bio">
					Daniel has been programming for several years. He started programming
					in middle school as part of its lego robotics team. He continued his
					programming career with the FIRST Robotics Competition where he was
					part of Team 696, The Circuit Breakers. Daniel was the head programmer
					of his team and during this time he learned how to program in LabView,
					JAVA, and C++, and really found his love for programming. He continued
					his work with programming as a software test engineer at HAAS
					Automation where he learned how to test software by finding
					vulnerabilities and misbehavior. Daniel is now working on web
					development and has been focusing on growing his skills with ReactJS
					and Redux. Some of his work in ReactJS and Redux can be found in the
					'Projects' tab.
				</p>
			</div>
		</div>
	);
}

export default About;
