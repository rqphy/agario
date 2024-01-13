import general from "../globals/variables"
import { lerp, getDistance } from "../globals/maths"

import * as PIXI from "pixi.js"

export default class Map {
	constructor() {
		this.mesh = new PIXI.Container()
		this.mesh.height = general.limits.y
		this.mesh.width = general.limits.x
		this.targetPosition = {
			x: general.limits.x * 0.5,
			y: general.limits.y * 0.5,
		}
	}

	update() {
		// update mesh position
		// to fix : issue between cursor position (relative to window size) and map size
		console.log(this.mesh.position.x, this.mesh.position.y)

		const projectedPosition = {
			x: (this.targetPosition.x * this.mesh.width) / window.innerWidth,
			y: (this.targetPosition.y * this.mesh.height) / window.innerHeight,
		}
		const newPosition = {
			x: lerp(this.mesh.position.x, projectedPosition.x, 0.0004),
			y: lerp(this.mesh.position.y, projectedPosition.y, 0.0004),
		}

		this.mesh.position.copyFrom(newPosition)
	}
}
