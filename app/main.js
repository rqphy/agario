import "./styles/main.css"
import * as PIXI from "pixi.js"
import Player from "./components/player"

const APP = document.querySelector("#app")

const game = new PIXI.Application({
	background: "#050505",
	resizeTo: window,
})

const player = new Player(game)

// game.stage.addChild(player.mesh)

APP.appendChild(game.view)
