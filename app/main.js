import "./styles/main.css"
import * as PIXI from "pixi.js"

const APP = document.querySelector("#app")

const game = new PIXI.Application({
	background: "#1099bb",
	resizeTo: window,
})

app.appendChild(game.view)
