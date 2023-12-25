import * as PIXI from "pixi.js"
import general from "../globals/variables"

export default class Player {
	constructor(game) {
		this.game = game
		this.mesh = new PIXI.Graphics()
		this.size = 50
		this.draw()
	}

	draw() {
		this.mesh.beginFill(0x00ffff, 1)
		this.mesh.drawCircle(
			window.innerWidth / 2,
			window.innerHeight / 2,
			this.size
		)
		this.mesh.endFill()
		this.game.stage.addChild(this.mesh)
	}
}
