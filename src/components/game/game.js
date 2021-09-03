import React, { useRef, useEffect } from "react";
import GameCanvas from "./GameCanvas.js";

export default function Game() {
	const elRef = useRef(null);
	let simAnimation = useRef(null);

	useEffect(() => {
		if (!elRef.current) return;

		simAnimation.current = new GameCanvas({
			elRef,
		});

		simAnimation.current.init();

		return () => {
			console.log("Destroy PIXI");
			// On unload completely destroy the application and all of it's children
			simAnimation.current.destroy();
			simAnimation.current = null;
			//pause playback if playing
			// pausePlayback()
		};
	}, [elRef]);
	return <div style={{}} ref={elRef}></div>;
}
