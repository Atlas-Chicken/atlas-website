import { Logo } from "../components/logo";
import '../assets/css/header.css';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Header = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const viewport = window.visualViewport;
  const viewportY = viewport ? viewport.height : 0;
  const y = useTransform(scrollYProgress, [0,1], [ 0, viewportY * 0.5 ]);

  return (
	<>
		<div className="demo-container">
			<motion.div style={{y}} className="demo-body">
				<video className="demo-item" muted loop autoPlay src="assets/videos/bg_video.mp4"/>
				{/* <div className="demo-item demo-filter"/> */}
				<div className="demo-item demo-title">
					<Logo style={{ maxHeight: "40vh" }}/>
					<h2>Atlas Chicken</h2>
				</div>
			</motion.div>
		</div>
	</>
  );
};