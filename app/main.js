import "./styles/main.css"
import * as PIXI from "pixi.js"
import Player from "./components/player"
import Orbs from "./components/orbs"
import Map from "./components/map"

const APP = document.querySelector("#app")

const game = new PIXI.Application({
	background: "#050505",
	resizeTo: window,
})
game.stage.eventMode = "static"
game.stage.hitArea = game.screen

const map = new Map()
const orbs = new Orbs(map)
const player = new Player(map)

game.stage.addEventListener("pointermove", (_event) => {
	player.targetPosition.x = _event.global.x
	player.targetPosition.y = _event.global.y
	map.targetPosition.x = -_event.global.x
	map.targetPosition.y = -_event.global.y
})

game.ticker.add((delta) => {
	player.update()
	map.update()
	for (let i = 0 - 1; i < orbs.maxNumberOfOrbs; i++) {
		if (player.eats(orbs.orbsList[i])) {
			orbs.eaten(i)
		}
	}
})

game.stage.addChild(map.mesh)
APP.appendChild(game.view)
