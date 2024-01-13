import general from "../globals/variables"
import * as PIXI from "pixi.js"

export default class Map {
	constructor() {
		this.mesh = new PIXI.Container()
		this.mesh.height = general.limits.y
		this.mesh.width = general.limits.x
	}
}
