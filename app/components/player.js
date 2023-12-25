import * as PIXI from "pixi.js"
import general from "../globals/variables"

export default class Player {
	constructor(game) {
		this.game = game
		this.mesh = new PIXI.Graphics()

		this.size = 50
		this.position = new PIXI.Point(
			window.innerWidth / 2,
			window.innerHeight / 2
		)
		this.velocity = new PIXI.Point(0, 0)
		this.draw()
	}

	draw() {
		this.mesh.beginFill(0x00ffff, 1)
		this.mesh.drawCircle(0, 0, this.size)
		this.mesh.endFill()
		this.mesh.position.set(this.position.x, this.position.y)
		this.mesh.eventMode = "dynamic"
		this.game.stage.addChild(this.mesh)
	}

	update() {
		console.log("update player")
		const newVelocity = new PIXI.Point()
		this.mesh.moveTo(this.position.x, this.position.y)
	}
}
