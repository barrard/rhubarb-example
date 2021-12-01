import * as PIXI from "pixi.js";

const style = new PIXI.TextStyle({
	fontFamily: "Helvetica",
	fontSize: 12,
	fill: "black",
	stroke: "#ffffff",
	strokeThickness: 1,
	// dropShadow: true,
	// dropShadowDistance: 10,
	// dropShadowAngle: Math.PI * 0.5,
	// dropShadowBlur: 4,
	// dropShadowColor: "#000000",
});
export default class Text {
	constructor(msg) {
		this.txt = new PIXI.Text(msg, style);
	}
}
