import { Graphics } from "@pixi/graphics";
import "@pixi/graphics-extras";

class GfxTra {
	taurus() {
		const shapes = new Graphics()
			.beginFill(0xffffff)
			.drawTorus(0, 0, 20, 100);
		return shapes;
	}
}
