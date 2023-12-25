import "./styles/main.css"
import * as PIXI from "pixi.js"
import Player from "./components/player"

const APP = document.querySelector("#app")

const game = new PIXI.Application({
	background: "#050505",
	resizeTo: window,
})
game.stage.eventMode = "static"
game.stage.hitArea = game.screen

const player = new Player(game)

game.stage.addEventListener("pointermove", (_event) => {
	console.log(_event)
	player.mesh.position.copyFrom(_event.global)
})

game.ticker.add((delta) => {
	// player.update()
})

APP.appendChild(game.view)
