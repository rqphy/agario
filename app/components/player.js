import * as PIXI from "pixi.js"
import general from "../globals/variables"
import { lerp, getDistance } from "../globals/maths"

export default class Player {
	constructor(game) {
		this.game = game
		this.mesh = new PIXI.Graphics()

		this.size = 50
		this.targetPosition = {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2,
		}
		this.draw()
	}

	draw() {
		this.mesh.beginFill(0x00ffff, 1)
		this.mesh.drawCircle(0, 0, this.size)
		this.mesh.endFill()
		this.mesh.position.set(window.innerWidth / 2, window.innerHeight / 2)
		this.game.stage.addChild(this.mesh)
	}

	eats(orb) {
		if (!orb) return false
		const distance = getDistance(
			{ x: orb.x, y: orb.y },
			{ x: this.mesh.x, y: this.mesh.y }
		)

		if (distance < this.size) return true
		return false
	}

	update() {
		// update mesh position
		const newPosition = {
			x: lerp(this.mesh.position.x, this.targetPosition.x, 0.004),
			y: lerp(this.mesh.position.y, this.targetPosition.y, 0.004),
		}

		this.mesh.position.copyFrom(newPosition)
	}
}
