import { useEffect } from "react";
import "../assets/css/navigation.css";

// https://stackoverflow.com/a/69944800

export const Navigation = () => {
	
	useEffect(() => {
		window.addEventListener('scroll', isSticky);
		return () => {
			window.removeEventListener('scroll', isSticky);
		};
	});
		   
	/* Method that will fix header after a specific scrollable */
	const isSticky = (e : Event) => {
		const header = document.querySelector('#menu');
		if (header == null) return;

		const viewport = window.visualViewport;
		if (viewport == null) return;

		const scrollTop = window.scrollY;
		scrollTop >= viewport.height ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
	};

	return (
		<nav id="menu">
			<ul className="nav">
				<li><a href="#games" className="page-scroll">
					Games
				</a></li>
				<li><a href="#about" className="page-scroll">
					About
				</a></li>
				<li><a href="#contact" className="page-scroll">
					Contact
				</a></li>
			</ul>
		</nav>
	);   
}