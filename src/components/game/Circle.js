import * as PIXI from "pixi.js";
import "@pixi/graphics-extras";

export default class Circle extends PIXI.Container {
	constructor() {
		super();
		this.gfx = new PIXI.Graphics();

		this.gfx
			.beginFill(0x00ff00)
			.lineStyle(4, 0xffea, 0.5)
			.drawCircle(400, 440, 80)
			.endFill();
	}
}
