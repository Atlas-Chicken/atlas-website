import { useEffect, useRef, useState } from "react";

type AutoVideoProps = {
	src: string
}

export const AutoVideo = ({src} : AutoVideoProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [ showImgFallback, setImgFallback ] = useState(false);
	
	useEffect(() => {
		videoRef.current?.play().catch(e => {
			if (e.name === "NotAllowedError") {
				setImgFallback(true);
			}
		});
	}, []);

	return (
		showImgFallback ?
			<img className="demo-item demo-video" src={src}></img> :
			<video ref={videoRef} className="demo-item demo-video" controls={false} playsInline={true} muted loop autoPlay src={src}/>
	);
};