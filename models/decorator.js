/*
A decorator should:

start with an empty paint stock
be able to add a can of paint to paint stock
be able to calculate total litres paint it has in stock
be able to calculate whether is has enough paint to paint a room
be able to paint room if has enough paint in stock
Note: Work on the assumption that one litre of paint covers one square meter.
*/

const Decorator = function () {
	this.paint_stock = [];
}

Decorator.prototype.addCan = function (can) {
	this.paint_stock.push(can);
}

Decorator.prototype.calcTotalLitres = function () {
	let total_litres = 0;
	for (let can of this.paint_stock) {
		total_litres += can.num_litres;
	}
	return total_litres;
}

Decorator.prototype.hasEnoughPaint = function (room) {
	if (room.area <= this.calcTotalLitres()) {
		return true;
	}
	return false;
}

Decorator.prototype.paintRoom = function (room) {
	if (this.hasEnoughPaint(room)) {
		room.painted = true;
	}
}

module.exports = Decorator;