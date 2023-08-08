/*
A room should:

have an area in square meters
should start not painted
should be able to be painted
*/

const Room = function (area) {
	this.area = area;
	this.painted = false;
}

module.exports = Room;