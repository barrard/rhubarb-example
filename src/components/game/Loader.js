import * as PIXI from "pixi.js";

export default class Loader {
	constructor(app) {
		this.app = app;
		this.images = [
			"thunder-bolt-strike/lighting-strike.png",
			"hallow-flame/Flame03-hollow_16x4.png",
			"fire-pit-flames/pit-flame.png",
			"full-lighting/4461.jpg",
			"basic_ground_tiles.png",
			"characters.png",
			"fantasy-tileset.png",
			"hextilesets2.PNG",
			"spr_road_2_strip29.png",
			"spr_roads_1_strip15.png",
			"thunder-bolt-strike/thunderbolt-sheet.json",
			"house_type07_NW.png",
			"orange-tree.json",
			"orange-tree.png",
			"tropical-plants.json",
			"tropical-plants.png",
			"TREE_HOUSE3.png",
			"rainbow-shrooms.png",
			"rainbow-shrooms.json",
			"gems-simple.png",
			"gems-simple.json",
			"Medieval_Building_02normal.png",
			"Medieval_Building_02snow.png",
			"red-roof-tile-plaster-house-openWindows.png",
		];

		this.loader = PIXI.Loader.shared;

		this.loader.onLoad.add(this.onLoad);
		this.loader.onError.add(this.onError);
		this.loader.onProgress.add(this.onProgress);
		this.loader.onComplete.add(this.onComplete);
	}

	load() {
		const path = "./img/";

		this.loader
			.add(this.images.map((img) => `${path}${img}`))
			.load(this.setup.bind(this));
	}

	addGems() {
		let that = this;
		const scale = 0.025;
		let blueGemPos = manyRandomXY(2, 500);
		let diamondPos = manyRandomXY(2, 500);
		let cutDiamondPos = manyRandomXY(2, 500);
		let pinkPosGemPos = manyRandomXY(2, 500);
		let rubyPos = manyRandomXY(10, 500);

		add(blueGemPos, "gem1.png");
		add(diamondPos, "gem2.png");
		add(cutDiamondPos, "gem3.png");
		add(pinkPosGemPos, "gem4.png");
		add(rubyPos, "gem5.png");

		function add(pos, file) {
			for (let i = 0; i < pos.length; i++) {
				that.addSpriteImg({
					file,
					position: { x: pos[i][0], y: pos[i][1] },
					scale: { x: scale, y: scale },
				});
			}
		}
	}

	addShrooms() {
		let that = this;
		const scale = 0.2;
		let preset = "Mushrooms_01_64x64_Alt_";
		let pinkPos = manyRandomXY(2, 1500);
		let redPos = manyRandomXY(2, 1500);
		let orangePos = manyRandomXY(2, 1500);
		let yellowPos = manyRandomXY(2, 1500);
		let greenPos = manyRandomXY(2, 1500);
		let bluePos = manyRandomXY(2, 1500);
		let purplePos = manyRandomXY(2, 1500);
		// let arr = manyRandomXY(20);

		add(pinkPos, "00_001.png");
		add(redPos, "00_002.png");
		add(orangePos, "00_003.png");
		add(yellowPos, "00_004.png");
		add(greenPos, "00_005.png");
		add(bluePos, "00_006.png");
		add(purplePos, "00_007.png");
		// add(arr, "01_001.png");
		// add(arr, "01_002.png")
		// add(arr, "01_003.png")
		// add(arr, "01_004.png")
		// add(arr, "01_005.png")
		// add(arr, "01_006.png")
		// add(arr, "01_007.png")
		// add(arr, "02_001.png")
		// add(arr, "02_002.png")
		// add(arr, "02_003.png")
		// add(arr, "02_004.png")
		// add(arr, "02_005.png");
		// add(arr, "02_006.png")
		// add(arr, "02_007.png")
		function add(pos, file) {
			for (let i = 0; i < pos.length; i++) {
				that.addSpriteImg({
					file: `${preset}${file}`,
					position: { x: pos[i][0], y: pos[i][1] },
					scale: { x: scale, y: scale },
				});
			}
		}
	}
	addTropicalPlants() {
		const that = this;
		let hibiscusLocations = [
			[700, 300],
			[400, 400],
			[700, 600],
			[600, 400],
			[700, 900],
			[900, 400],
		];
		let yellowWildFlower = [[460, 270]];

		let grassPos = [
			[600, 275],
			[400, 279],
		];

		let potLeafPos = [[1560, 275]];

		let vinePos = [[460, 205]];
		let palmTopPos = [[590, 125]];
		let lillyPos = [[600, 205]];
		let palmLeavesTopPos = [[1560, 205]];
		let palmTreePos = [[160, 185]];
		let bushTreePos = [[1760, 555]];

		addPlant(yellowWildFlower, "Flower_Game_vector.png", 0.25);
		addPlant(hibiscusLocations, "Flower_Game_vector_2.png", 0.25);

		addPlant(grassPos, "Grass_Game_Vector.png", 0.25);
		addPlant(potLeafPos, "Leaf_Game_vector.png", 0.5);
		addPlant(vinePos, "Leaf_Game_vector_2.png", 0.2);
		addPlant(palmTopPos, "Plant_Game_vector.png", 0.5);
		addPlant(lillyPos, "Plant_Game_vector_2.png", 0.15);
		addPlant(palmLeavesTopPos, "Plant_Game_vector_3.png", 0.5);
		addPlant(palmTreePos, "Tree_Game_Vector.png", 1);
		addPlant(bushTreePos, "Tree_Game_Vector_1.png", 1);

		function addPlant(pos, file, scale = 1) {
			for (let i = 0; i < pos.length; i++) {
				that.addSpriteImg({
					file,
					position: { x: pos[i][0], y: pos[i][1] },
					scale: { x: scale, y: scale },
				});
			}
		}
	}
	addOrangeTrees() {
		this.addSpriteImg({
			file: "oranges-0-group.png",
			position: { x: 500, y: 400 },
			scale: { x: 2, y: 2 },
		});

		this.addSpriteImg({
			file: "oranges-0-create.png",
			position: { x: 900, y: 400 },
			scale: { x: 2, y: 2 },
		});

		this.addSpriteImg({
			file: "orangetrees-1-1.png",
			position: { x: 800, y: 200 },
			scale: { x: 2, y: 2 },
		});

		this.addSpriteImg({
			file: "orangetrees-0-2.png",
			position: { x: 1200, y: 400 },
			scale: { x: 2, y: 2 },
		});

		this.addSpriteImg({
			file: "oranges-0-three-light.png",
			position: { x: 1150, y: 400 },
			scale: { x: 2, y: 2 },
		});

		var pos = [
			[850, 150],
			[800, 130],
			[750, 160],
			[850, 220],
		];
		for (let i = 0; i < pos.length; i++) {
			this.addSpriteImg({
				file: "oranges-0-three.png",
				position: { x: pos[i][0], y: pos[i][1] },
				scale: { x: 2, y: 2 },
			});
		}
	}

	spriteAnimation({
		fromJSON,
		resources,
		file,
		w,
		h,
		position,
		scale,
		options: { animationSpeed = 1 },
	}) {
		let textures = [];
		// let spriteDimensions = { w: 16, h: 5 };

		if (!fromJSON) {
			const texture = new PIXI.Texture(resources[file].texture);
			let { width, height } = texture;
			let tileW = width / w;
			let tileH = height / h;

			for (let r = 0; r < h; r++) {
				for (let c = 0; c < w; c++) {
					const texture = new PIXI.Texture(resources[file].texture);

					const rect = new PIXI.Rectangle(
						tileW * c,
						tileH * r,
						tileW,
						tileH
					);
					texture.frame = rect;
					textures.push(texture);
					// const sprite = new PIXI.Sprite(pitFlamesImg);
				}
			}
		} else {
			for (let i = 1; i < fromJSON; i++) {
				const texture = PIXI.Texture.from(`${file}${i}.png`);
				textures.push(texture);
			}
		}

		const animation = new PIXI.AnimatedSprite(textures);

		// console.log(textures);

		animation.anchor.set(0.5, 0.5);
		if (scale) {
			animation.scale.set(scale.x, scale.y);
		}
		if (position) {
			animation.position.set(position.x, position.y);
		}

		this.app.stage.addChild(animation);
		animation.play();
		animation.animationSpeed = animationSpeed || 1;
	}
	setup(loader, resources) {
		// console.log(resources);

		this.basicGround_etc(resources);
		this.addTreeHouse(resources);
		this.addOrangeTrees();
		this.addTropicalPlants();
		this.addShrooms();
		this.addGems();

		this.addFire(resources);

		// this.spriteAnimation({
		// 	fromJSON: 11,
		// 	resources,
		// 	file: "lighting-strike-",

		// 	position: { x: 300, y: 300 },
		// 	scale: { x: 0.3, y: 0.3 },
		// 	options: { animationSpeed: 0.5 },
		// });
	}

	addSpriteImg({ file, position, resources, scale }) {
		const texture = resources
			? new PIXI.Texture(resources[file].texture)
			: PIXI.Texture.from(`${file}`);

		const sprite = new PIXI.Sprite(texture);
		sprite.position.set(position.x, position.y);
		if (scale) {
			sprite.scale.set(scale.x, scale.y);
		}
		sprite.anchor.set(0.5, 0.5);
		this.app.stage.addChild(sprite);
	}

	onLoad(r) {
		// console.log("loaded");
		// console.log(r);
	}
	onError(e) {
		console.log("error");
		console.log(e);
	}
	onProgress(p) {
		// console.log("Progress");
		// console.log(p);
	}
	onComplete(c) {
		// console.log("onComplete");
		// console.log(c);
	}

	addFire(resources) {
		this.spriteAnimation({
			resources,
			file: "./img/hallow-flame/Flame03-hollow_16x4.png",
			w: 16,
			h: 5,
			position: { x: 625, y: 395 },
			scale: { x: 0.5, y: 0.5 },

			options: { animationSpeed: 0.5 },
		});
	}
	basicGround_etc(resources) {
		const basic_ground_tiles =
			resources["./img/basic_ground_tiles.png"].texture;

		//WALLS
		let { width, height } = basic_ground_tiles;
		let tileW = width / 8;
		let tileH = height / 7;
		let rect1 = new PIXI.Rectangle(0, height - tileH * 1, tileW, tileH);
		basic_ground_tiles.frame = rect1;
		const sprit = new PIXI.Sprite(basic_ground_tiles);
		const sprit2 = new PIXI.Sprite(basic_ground_tiles);
		// sprit.scale.set(2, 2);
		sprit.position.set(200, 200);
		sprit2.position.set(200 + 70, 200 + 35);

		const cornerTexture = new PIXI.Texture(
			resources["./img/basic_ground_tiles.png"].texture
		);
		const corner = new PIXI.Rectangle(0, height - tileH * 2, tileW, tileH);
		cornerTexture.frame = corner;
		const cornerSprite = new PIXI.Sprite(cornerTexture);
		cornerSprite.position.set(200 + 145, 200 + 65);

		const postTexture = new PIXI.Texture(
			resources["./img/basic_ground_tiles.png"].texture
		);
		const post = new PIXI.Rectangle(tileW * 4, tileH * 5, tileW, tileH);
		postTexture.frame = post;
		const postSprite = new PIXI.Sprite(postTexture);
		postSprite.position.set(80, 150 + 0);

		const dirtGroundTexture = new PIXI.Texture(
			resources["./img/basic_ground_tiles.png"].texture
		);
		const dirtGround = new PIXI.Rectangle(
			tileW * 3,
			tileH * 0,
			tileW,
			tileH
		);
		dirtGroundTexture.frame = dirtGround;

		let groundStartX = 1000;
		let groundStartY = 300;
		const groundCount = 30;
		for (let i = 0; i < groundCount; i++) {
			const dirtGroundSprite = new PIXI.Sprite(dirtGroundTexture);
			dirtGroundSprite.position.set(groundStartX, groundStartY);
			this.app.stage.addChild(dirtGroundSprite);

			groundStartX += 60;
			groundStartY += 30;
		}

		groundStartX = 900;
		groundStartY = 300;

		for (let i = 0; i < groundCount; i++) {
			const dirtGroundSprite = new PIXI.Sprite(dirtGroundTexture);
			dirtGroundSprite.position.set(groundStartX, groundStartY);
			this.app.stage.addChild(dirtGroundSprite);

			groundStartX += 60;
			groundStartY += 30;
		}
		// const dirtGroundSprite2 = new PIXI.Sprite(dirtGroundTexture);
		// dirtGroundSprite2.position.set(140, 330);

		// const dirtGroundSprite3 = new PIXI.Sprite(dirtGroundTexture);
		// dirtGroundSprite3.position.set(200, 360);

		this.app.stage.addChild(sprit, sprit2, cornerSprite, postSprite);
	}

	addTreeHouse(resources) {
		this.addSpriteImg({
			file: "./img/red-roof-tile-plaster-house-openWindows.png",
			resources,
			position: { x: 1700, y: 300 },
			scale: { x: 0.75, y: 0.75 },
		});

		this.addSpriteImg({
			file: "./img/Medieval_Building_02normal.png",
			resources,
			position: { x: 1000, y: 100 },
			scale: { x: 0.75, y: 0.75 },
		});

		this.addSpriteImg({
			file: "./img/Medieval_Building_02snow.png",
			resources,
			position: { x: 400, y: 600 },
			scale: { x: 0.75, y: 0.75 },
		});

		this.addSpriteImg({
			file: "./img/TREE_HOUSE3.png",
			resources,
			position: { x: 500, y: 200 },
			// scale: { x: 2, y: 2 },
		});
	}
}

function manyRandomXY(count, max, neg) {
	let pos = [];
	for (let i = 0; i < count; i++) {
		const xy = randomXY(max, neg);

		pos.push(xy);
	}
	console.log(pos);
	return pos;
}
function randomXY(max, neg) {
	const x = randomVal(max, neg);
	const y = randomVal(max, neg);

	return [x, y];
}

function randomVal(max, neg) {
	let n = Math.floor(Math.random() * max) + 1;
	if (neg) {
		let ran = randomVal(2);
		if (ran % 2) n *= -1;
	}

	return n;
}
