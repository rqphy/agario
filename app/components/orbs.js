import * as PIXI from "pixi.js"
import general from "../globals/variables"

export default class Orbs {
	constructor(game) {
		this.game = game

		this.maxNumberOfOrbs = 200
		this.orbSize = 15
		this.orbsList = []
		this.fillOrbsList()
	}

	fillOrbsList() {
		for (let i = 0; i < this.maxNumberOfOrbs; i++) {
			const x = Math.round(Math.random() * general.limits.x)
			const y = Math.round(Math.random() * general.limits.y)
			this.orbsList.push(new Orb(x, y, this.orbSize, this.game))
		}
	}
}

class Orb {
	constructor(x, y, ray, game) {
		this.size = ray
		this.x = x
		this.y = y
		this.game = game

		this.mesh = new PIXI.Graphics()

		this.draw()
	}

	draw() {
		this.mesh.beginFill(0xffffff, 1)
		this.mesh.drawCircle(0, 0, this.size)
		this.mesh.endFill()
		this.mesh.position.set(this.x, this.y)
		this.game.stage.addChild(this.mesh)
	}
}
