import * as PIXI from "pixi.js";

export default class Player extends PIXI.Container {
	constructor() {
		super();
		// this.gfx = new PIXI.Graphics();
		this.texture = PIXI.Texture.from("./img/bandit.jpg");
		this.sprite = new PIXI.Sprite(this.texture);
		this.sprite.scale.x = 0.5;
		this.sprite.scale.y = 0.5;
		this.sprite.anchor.set(0.5, 0.5);

		this.sprite.interactive = true;
		this.sprite.on("pointerdown", () => {
			this.sprite.scale.x = 1.5;
			this.sprite.scale.y = 1.5;
		});
	}

	particles() {
		let loader = PIXI.Loader.shared();
		loader.add();
		new PIXI.ParticleContainer(1000, {
			position: true,
			rotation: true,
			vertices: true,
			tint: true,
			uvs: true,
		});
	}
}
