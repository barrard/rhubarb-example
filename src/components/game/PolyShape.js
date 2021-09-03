import * as PIXI from "pixi.js";

export default class PolyShape extends PIXI.Container {
	constructor() {
		super();
		this.gfx = new PIXI.Graphics();

		this.gfx
			.beginFill(0x00ff00)
			.lineStyle(4, 0xffea, 0.5)
			.drawPolygon([200, 200, 100, 120, 33, 55, 66, 77, 22, 55, 111, 222])
			.endFill();
	}
}
