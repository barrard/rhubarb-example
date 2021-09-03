import * as PIXI from "pixi.js";

export default class Text {
	constructor(msg) {
		const style = new PIXI.TextStyle({
			fontFamily: "Helvetica",
			fontSize: 48,
			fill: "deepskyblue",
			stroke: "#ffffff",
			strokeThickness: 5,
			dropShadow: true,
			dropShadowDistance: 10,
			dropShadowAngle: Math.PI * 0.5,
			dropShadowBlur: 4,
			dropShadowColor: "#000000",
		});
		this.txt = new PIXI.Text(msg, style);
	}
}
