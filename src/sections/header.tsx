import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Logo } from "../components/logo";
import '../assets/css/header.css';

export const Header = () => {
  return (
	<>
		<div className="demo-container">
			<Parallax startScroll={0} speed={-50} className="demo-body">
				<video className="demo-item" muted loop autoPlay src="assets/videos/bg_video.mp4"/>
				
				<div className="demo-item demo-title">
					<Logo/>
					<h2>Atlas Chicken</h2>
				</div>
			</Parallax>
		</div>
	</>
  );
};