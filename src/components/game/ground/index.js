import * as PIXI from "pixi.js";
import Text from "../Text";
export default class Ground {
	constructor({ viewport, resources, renderer }) {
		this.viewport = viewport;
		this.texture = resources["./img/basic_ground_tiles.png"].texture;
		this.groundGrid = [];
		this.renderer = renderer;
		this.texts = [];
		this.textures = {
			//WHOLE
			//green
			grassyGreen: { w: 0, h: 0 },
			flatGreen: { w: 1, h: 0 },
			//stone
			stoneGrey: { w: 2, h: 0 },
			//dirt
			dirtBrown: { w: 3, h: 0 },
			//HALF
			grassStoneNW: { w: 4, h: 0 },
			grassStoneNE: { w: 7, h: 0 },
			grassStoneSE: { w: 5, h: 0 },
			grassStoneSW: { w: 6, h: 0 },
			stoneDirtNW: { w: 0, h: 2 },
			stoneDirtNE: { w: 1, h: 2 },
			stoneDirtSE: { w: 3, h: 2 },
			stoneDirtSW: { w: 2, h: 2 },
			grassDirtNW: { w: 4, h: 2 },
			grassDirtNE: { w: 7, h: 2 },
			grassDirtSE: { w: 5, h: 2 },
			grassDirtSW: { w: 6, h: 2 },
			// //corner
			stoneGrassWest: { w: 0, h: 1 },
			stoneGrassEast: { w: 1, h: 1 },
			stoneGrassSouth: { w: 2, h: 1 },
			stoneGrassNorth: { w: 3, h: 1 },
			grassStoneWest: { w: 4, h: 1 },
			grassStoneEast: { w: 5, h: 1 },
			grassStoneSouth: { w: 6, h: 1 },
			grassStoneNorth: { w: 7, h: 1 },
			grassDirtWest: { w: 0, h: 3 },
			grassDirtEast: { w: 1, h: 3 },
			grassDirtSouth: { w: 2, h: 3 },
			grassDirtNorth: { w: 3, h: 3 },
			dirtGrassWest: { w: 4, h: 3 },
			dirtGrassEast: { w: 5, h: 3 },
			dirtGrassSouth: { w: 6, h: 3 },
			dirtGrassNorth: { w: 7, h: 3 },
			//QUAD
			stoneDirtGrassWest: { w: 3, h: 4 },
			stoneDirtGrassEast: { w: 0, h: 4 },
			stoneDirtGrassSouth: { w: 7, h: 4 },
			stoneDirtGrassNorth: { w: 4, h: 4 },
			dirtStoneGrassWest: { w: 2, h: 4 },
			dirtStoneGrassEast: { w: 1, h: 4 },
			dirtStoneGrassSouth: { w: 6, h: 4 },
			dirtStoneGrassNorth: { w: 5, h: 4 },
			// //FENCE
			cornerSouth: { w: 1, h: 5 },
			cornerNorth: { w: 3, h: 5 },
			cornerEast: { w: 5, h: 5 },
			cornerWest: { w: 7, h: 5 },
			CornerSouthGrassy: { w: 0, h: 5 },
			CornerNorthGrassy: { w: 2, h: 5 },
			CornerEastGrassy: { w: 4, h: 5 },
			CornerWestGrassy: { w: 6, h: 5 },
			frontNW_SE_Grassy: { w: 4, h: 6 },
			frontSW_NE_Grassy: { w: 6, h: 6 },
			backNW_SE_Grassy: { w: 0, h: 6 },
			backSW_NE_Grassy: { w: 2, h: 6 },
			frontNW_SE: { w: 5, h: 6 },
			frontSW_NE: { w: 7, h: 6 },
			backNW_SE: { w: 1, h: 6 },
			backSW_NE: { w: 3, h: 6 },
		};

		this.resources = resources;
		this.init();
	}

	init() {
		//Making all textures
		for (let name in this.textures) {
			this.textures[name] = this.makeTextures({ ...this.textures[name] });
		}
		let test = new PIXI.Graphics()
			// .beginFill(0x00000000)
			.lineStyle(4, 0xffea, 0.1)
			.drawRect(0, 0, 128, 128)
			// .endFill()
			.lineStyle(4, 0xff0000, 0.5)
			.drawCircle(64, 64, 5)
			.endFill();

		let testHit = new PIXI.Graphics()
			// .beginFill(0x00000000)
			.lineStyle(4, 0xffea, 0.5)
			.drawRect(0, 0, 128, 128)
			// .endFill()
			.lineStyle(4, 0xff0000)
			.drawCircle(64, 64, 5)
			.endFill();

		this.textures["test"] = this.renderer.generateTexture(test);
		this.textures["testHit"] = this.renderer.generateTexture(testHit);
		this.initGroundGrid();

		// this.grassArea({ x: 500, y: 200, w: 50, h: 50 });
		// this.road({ x: 0, y: 0, length: 40, dir: "NW_SE" });
		// this.road({ x: 25, y: 3, length: 14, dir: "SW_NE" });

		this.draw();
	}

	initGroundGrid() {
		let width = 30;
		let height = 30;

		for (let h = 0; h <= height; h++) {
			if (!this.groundGrid[h]) this.groundGrid[h] = [];

			for (let w = 0; w <= width; w++) {
				if (!this.groundGrid[h][w]) this.groundGrid[h][w] = [];

				// this.groundGrid[h][w] = "CornerEastGrassy";
				// this.groundGrid[h][w] = "test";
			}
		}
	}

	draw() {
		console.log(this.groundGrid);

		for (let h in this.groundGrid) {
			for (let w in this.groundGrid[h]) {
				let _testTexture;
				if (this.groundGrid[h][w] !== "test") {
					_testTexture = this.textures["testHit"];
				}
				const texture = this.textures[this.groundGrid[h][w]];
				let tempAdjX = 0;
				let tempAdjY = 0;
				let adjX = 0;
				let adjW = 0;
				h % 2 ? (adjX = 0) : (adjX = 64);
				h % 2 ? (adjW = 128) : (adjW = 128);

				const x = tempAdjX + adjX + w * adjW;
				const y = tempAdjY + h * 32;
				debugger;
				this.addSprite(texture, { x, y });

				if (_testTexture) {
					this.addSprite(_testTexture, { x, y });
				}

				const txt = new Text(`${w}-${x}, ${h}-${y}`);
				// this.addSprite(txt.txt, { x, y });

				txt.txt.anchor.set(0.5, 0.5);
				txt.txt.position.set(x, y);

				this.texts.push(txt.txt);

				// const texture = this.textures[this.groundGrid[h][w]];
				// let tempAdjX = 0;
				// let tempAdjY = 0;
				// let adjX = 0;
				// let adjW = 0;
				// h % 2 ? (adjX = 0) : (adjX = 64);
				// h % 2 ? (adjW = 128) : (adjW = 128);

				// const x = tempAdjX + adjX + w * adjW;
				// const y = tempAdjY + h * 32;
				// debugger;
				// this.addSprite(texture, { x, y });
			}
		}

		this.viewport.addChild(...this.texts);
	}

	road({ x, y, length, dir }) {
		const h = 2;
		//adding ground

		const startingPos = { x, y };

		const width = length;
		const height = h;

		let magicSwitch = false;

		if (dir === "NW_SE") {
			// const grassStoneSW = this.textures["grassStoneSW"];
			// const grassStoneNE = this.textures["grassStoneNE"];

			for (let h = 0; h < height; h++) {
				let texture;
				h % 2 ? (texture = "grassStoneSW") : (texture = "grassStoneNE");
				for (let w = 0; w < width; w++) {
					const x = startingPos.x + w;
					const y = startingPos.y + w;

					console.log({ x, y });
					this.groundGrid[y][x] = texture;

					// this.addSprite(texture, { x, y });
				}
				startingPos.x -= 1;
				startingPos.y += 1;
			}
		} else if (dir === "SW_NE") {
			// const grassStoneSE = this.textures["grassStoneSE"];
			// const grassStoneNW = this.textures["grassStoneNW"];

			for (let h = 0; h < height; h++) {
				let texture;
				h % 2 ? (texture = "grassStoneSE") : (texture = "grassStoneNW");
				for (let w = 0; w < width; w++) {
					if (!magicSwitch && (startingPos.x - w) % 2 !== 0) {
						startingPos.x -= 1;

						magicSwitch = true;
					} else if (magicSwitch && (startingPos.x - w) % 2 === 0) {
						magicSwitch = false;
					}

					let x = startingPos.x - w; //* 60;
					let y = startingPos.y + w; //* 30;

					// let isEven = h % 2 && w % 2 == 0;
					// const x = isEven
					// 	? startingPos.x - w - 1
					// 	: startingPos.x - w + 1; //* 60;
					// const y = isEven
					// 	? startingPos.y + w + 1
					// 	: startingPos.y + w - 1; //* 30;

					console.log({ texture, x, y });
					this.groundGrid[y][x] = texture;

					// this.addSprite(texture, { x, y });
				}
				// startingPos.x = h % 2 ? startingPos.x - 1 : startingPos.x + 1; // 60;
				// startingPos.y = h % 2 ? startingPos.y - 1 : startingPos.y + 1; // 30;

				// console.log(`NEW SIDE`);
				// startingPos.x += 1; // 60;
				// startingPos.y += 1; // 30;
			}
		}
	}

	grassArea({ x, y, w, h }) {
		//adding ground

		const startingPos = { x, y };

		const width = w;
		const height = h;

		const texture = this.textures["grassyGreen"];

		for (let h = 0; h < height; h++) {
			for (let w = 0; w < width; w++) {
				debugger;
				const x = startingPos.x + w * 60;
				const y = startingPos.y + w * 30;

				this.addSprite(texture, { x, y });
			}
			startingPos.x -= 60;
			startingPos.y += 30;
		}
	}

	makeTextures({ w, h }) {
		if (w === undefined || h === undefined) return;
		const { width, height } = this.texture;
		const tileW = width / 8;
		const tileH = height / 7;
		const texture = new PIXI.Texture(this.texture);
		texture.frame = new PIXI.Rectangle(tileW * w, tileH * h, tileW, tileH);

		return texture;
	}

	addSprite(texture, { x, y }) {
		const sprite = new PIXI.Sprite(texture);
		debugger;
		sprite.position.set(x, y);
		sprite.anchor.set(0.5, 0.5);

		this.viewport.addChild(sprite);

		return sprite;
	}
}
