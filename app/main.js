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

console.log(game)

game.stage.addEventListener("pointermove", (_event) => {
	player.targetPosition.x = _event.global.x - window.innerWidth / 2
	player.targetPosition.y = _event.global.y - window.innerHeight / 2
})

game.ticker.add((delta) => {
	player.update()
})

APP.appendChild(game.view)
