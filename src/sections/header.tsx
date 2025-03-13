import { Logo } from "../components/logo";
import '../assets/css/header.css';
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Header = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const viewport = window.visualViewport;
  const viewportY = viewport ? viewport.height : 0;
  const y = useTransform(scrollYProgress, [0,1], [ 0, viewportY * 0.5 ]);

	const [ showImgFallback, setImgFallback ] = useState(false);

	useEffect(() => {
		videoRef.current?.play().catch(e => {
			if (e.name === "NotAllowedError") {
				setImgFallback(true);
			}
		});
	}, []);

  return (
	<>
		<div className="demo-container">
			<motion.div style={{y}} className="demo-body">
				{showImgFallback ?
					<img className="demo-item demo-video" src="assets/videos/bg_video.mp4"></img> :
					<video ref={videoRef} className="demo-item demo-video" controls={false} playsInline={true} muted loop autoPlay src="assets/videos/bg_video.mp4"/>
				}
				<div className="demo-item demo-title">
					<Logo style={{ maxHeight: "40vh" }}/>
					<h2>Atlas Chicken</h2>
				</div>
			</motion.div>
		</div>
	</>
  );
};