import * as PIXI from "pixi.js"

export default class Player {
	constructor(game) {
		this.game = game
		this.mesh = new PIXI.Graphics()
		this.draw()
	}

	draw() {
		this.mesh.beginFill(0x00ffff, 1)
		this.mesh.drawCircle(250, 250, 50)
		this.mesh.endFill()
		this.game.stage.addChild(this.mesh)
	}
}
