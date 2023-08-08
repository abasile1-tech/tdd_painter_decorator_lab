const assert = require('assert');
const Room = require('../room.js');

describe('Room', function () {
	let room;

	beforeEach(function () {
		room = new Room(500);
	});

	it('should have an area', function () {
		const actual = room.area;
		assert.strictEqual(actual, 500);
	})

	it('shouldn\'t be painted', function () {
		const actual = room.painted;
		assert.strictEqual(actual, false);
	})
})