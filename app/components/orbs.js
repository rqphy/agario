import * as PIXI from "pixi.js"

export default class Orbs {
	constructor(game) {
		this.game = game

		this.orbsList = []
		this.fillOrbsList()
	}

	fillOrbsList() {
		this.orbsList.push(new Orb(100, 100, 10, this.game))
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
		console.log("add orb")
	}
}
