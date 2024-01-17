export function lerp(start, stop, amt) {
	return amt * (stop - start) + start
}

export function getDistance(aPosition, bPosition) {
	return Math.sqrt(
		Math.pow(bPosition.x - aPosition.x, 2) +
			Math.pow(bPosition.y - aPosition.y, 2)
	)
}

export function getRandomHex() {
	return Math.floor(Math.random() * 16777215).toString(16)
}
