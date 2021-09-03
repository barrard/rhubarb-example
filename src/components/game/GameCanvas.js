import * as PIXI from "pixi.js";
// import { Viewport } from 'pixi-viewport'
// import gsap from 'gsap'

import Player from "./Player.js";
import PolyShape from "./PolyShape.js";
import Circle from "./Circle.js";
import Text from "./Text.js";
import Loader from "./Loader.js";
export default class GameCanvas {
	constructor({ elRef }) {
		this.app = null;
		this.elRef = elRef;
	}

	init() {
		PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

		this.app = new PIXI.Application({
			// autoStart: false,
			resolution: 1,
			antialias: true,
			autoDensity: true,
			width: window.innerWidth,
			height: window.innerHeight,
			// backgroundColor: 0x666666,
			backgroundColor: 0xaaaaaa,
		});

		this.elRef.current.appendChild(this.app.view);

		let player1 = new Player();
		let poly = new PolyShape();
		const circ = new Circle();
		const txt = new Text("player1");

		// this.app.stage.addChild(player1.sprite, poly.gfx, circ.gfx, txt.txt);

		this.loader = new Loader(this.app);
		this.loader.load();

		// this.app.ticker((delta) => this.loop(delta));
	}

	loop(delta) {}
	destroy() {
		this.app.destroy(true, true);
		this.loader.loader.reset();
	}
}
