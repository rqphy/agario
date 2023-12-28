import "./styles/main.css"
import * as PIXI from "pixi.js"
import Player from "./components/player"
import Orbs from "./components/orbs"

const APP = document.querySelector("#app")

const game = new PIXI.Application({
	background: "#050505",
	resizeTo: window,
})
game.stage.eventMode = "static"
game.stage.hitArea = game.screen

const orbs = new Orbs(game)
const player = new Player(game)

game.stage.addEventListener("pointermove", (_event) => {
	player.targetPosition.x = _event.global.x
	player.targetPosition.y = _event.global.y
})

game.ticker.add((delta) => {
	player.update()
	for (let i = orbs.maxNumberOfOrbs - 1; i > 0; i--) {
		if (player.eats(orbs.orbsList[i])) {
			orbs.eaten(i)
		}
	}
})

APP.appendChild(game.view)
