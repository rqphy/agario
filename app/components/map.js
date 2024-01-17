import general from "../globals/variables"
import { lerp, getDistance } from "../globals/utils"

import * as PIXI from "pixi.js"

export default class Map {
	constructor() {
		this.mesh = new PIXI.Container()
		this.mesh.height = general.limits.y
		this.mesh.width = general.limits.x
		this.movementSpeed = 1.8
		this.targetPosition = {
			x: 0,
			y: 0,
		}
	}

	update() {
		// update mesh position

		const projectedPosition = {
			x: this.mesh.position.x - this.targetPosition.x,
			y: this.mesh.position.y - this.targetPosition.y,
		}

		const newPosition = {
			x: lerp(
				this.mesh.position.x,
				projectedPosition.x,
				this.movementSpeed
			),
			y: lerp(
				this.mesh.position.y,
				projectedPosition.y,
				this.movementSpeed
			),
		}

		this.mesh.position.copyFrom(newPosition)
		return newPosition
	}
}
