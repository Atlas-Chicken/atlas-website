import { Logo } from "../components/logo";
import '../assets/css/header.css';
import { motion, useScroll, useTransform } from "framer-motion";
import { AutoVideo } from "../components/autovideo";

export const Header = () => {
	const { scrollYProgress } = useScroll();
	
	const viewport = window.visualViewport;
	const viewportY = viewport ? viewport.height : 0;
	const y = useTransform(scrollYProgress, [0,1], [ 0, viewportY * 0.8 ]);

	return (
		<>
			<div className="demo-container">
				<motion.div style={{y}} className="demo-body">
					<AutoVideo src="assets/videos/bg_video.mp4"/>
					<div className="demo-item demo-title">
						<Logo style={{ maxHeight: "40vh" }}/>
						<h2>Atlas Chicken</h2>
					</div>
				</motion.div>
			</div>
		</>
	);
};