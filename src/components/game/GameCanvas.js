import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
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

		// create viewport
		this.viewport = new Viewport({
			screenWidth: window.innerWidth,
			screenHeight: window.innerHeight,
			worldWidth: 1000,
			worldHeight: 1000,

			interaction: this.app.renderer.plugins.interaction, // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
		});

		// add the viewport to the stage
		this.app.stage.addChild(this.viewport);

		// activate plugins
		this.viewport.drag().pinch().wheel().decelerate();

		let player1 = new Player();
		let poly = new PolyShape();
		const circ = new Circle();
		const txt = new Text("player1");
		txt.txt.position.x = 200;
		txt.txt.position.y = 300;

		// this.viewport.addChild(player1.sprite, poly.gfx, circ.gfx, txt.txt);

		this.loader = new Loader(this);
		this.loader.load();

		this.viewport.addChild(txt.txt);
		// this.app.ticker((delta) => this.loop(delta));
	}

	loop(delta) {}
	destroy() {
		this.app.destroy(true, true);
		this.loader.loader.reset();
	}
}
