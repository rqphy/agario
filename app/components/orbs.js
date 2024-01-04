import * as PIXI from "pixi.js"
import general from "../globals/variables"

export default class Orbs {
	constructor(map) {
		this.map = map

		this.maxNumberOfOrbs = 200
		this.orbSize = general.orbSize
		this.orbsList = []
		this.fillOrbsList()
	}

	fillOrbsList() {
		for (let i = 0; i < this.maxNumberOfOrbs; i++) {
			this.orbsList.push(
				new Orb(this.getRandomPosition(), this.orbSize, this.map)
			)
		}
	}

	getRandomPosition() {
		return {
			x: Math.round(Math.random() * general.limits.x),
			y: Math.round(Math.random() * general.limits.y),
		}
	}

	eaten(index) {
		this.orbsList[index]?.remove()
		this.orbsList[index] = new Orb(
			this.getRandomPosition(),
			this.orbSize,
			this.map
		)
	}
}

class Orb {
	constructor(position, ray, map) {
		this.size = ray
		this.x = position.x
		this.y = position.y
		this.map = map

		this.mesh = new PIXI.Graphics()

		this.draw()
	}

	draw() {
		this.mesh.beginFill(0xffffff, 1)
		this.mesh.drawCircle(0, 0, this.size)
		this.mesh.endFill()
		this.mesh.position.set(this.x, this.y)
		this.map.mesh.addChild(this.mesh)
	}

	remove() {
		this.map.mesh.removeChild(this.mesh)
		this.mesh.destroy()
	}
}
