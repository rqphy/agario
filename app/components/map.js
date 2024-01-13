import general from "../globals/variables"
import { lerp, getDistance } from "../globals/maths"

import * as PIXI from "pixi.js"

export default class Map {
	constructor() {
		this.mesh = new PIXI.Container()
		this.mesh.height = general.limits.y
		this.mesh.width = general.limits.x
		this.targetPosition = { x: 0, y: 0 }
	}

	update() {
		// update mesh position
		console.log(this.mesh.position)
		const newPosition = {
			x: lerp(this.mesh.position.x, this.targetPosition.x, 0.004),
			y: lerp(this.mesh.position.y, this.targetPosition.y, 0.004),
		}

		this.mesh.position.copyFrom(newPosition)
	}
}
