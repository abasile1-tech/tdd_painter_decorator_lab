/*
A paint can should:

have a number of litres of paint
be able to check if it is empty
be able to empty itself of paint
*/

const PaintCan = function (num_litres) {
	this.num_litres = num_litres;
}

PaintCan.prototype.isEmpty = function() {
	if (this.num_litres === 0) {
		return true;
	}
	return false;
}

PaintCan.prototype.empty = function() {
	this.num_litres = 0;
}


module.exports = PaintCan;