import general from "../globals/variables"
import { lerp, getDistance } from "../globals/maths"

import * as PIXI from "pixi.js"

export default class Map {
	constructor() {
		this.mesh = new PIXI.Container()
		this.mesh.height = general.limits.y
		this.mesh.width = general.limits.x
		this.targetPosition = {
			x: 0,
			y: 0,
		}
	}

	update() {
		// update mesh position

		// const projectedPosition = {
		// 	x: (this.targetPosition.x * this.mesh.width) / window.innerWidth,
		// 	y: (this.targetPosition.y * this.mesh.height) / window.innerHeight,
		// }

		// console.log(this.targetPosition)

		const projectedPosition = {
			x: this.mesh.position.x - this.targetPosition.x,
			y: this.mesh.position.y - this.targetPosition.y,
		}

		// console.log(projectedPosition.y)

		const newPosition = {
			x: lerp(this.mesh.position.x, projectedPosition.x, 0.8),
			y: lerp(this.mesh.position.y, projectedPosition.y, 0.8),
		}

		// console.log(newPosition.y)

		// console.log(this.mesh.position.x, newPosition.x)

		this.mesh.position.copyFrom(newPosition)
		return newPosition
	}
}
