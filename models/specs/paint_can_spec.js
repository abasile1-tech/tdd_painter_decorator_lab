const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('PaintCan', function () {
	let paint_can;

	beforeEach(function () {
		paint_can = new PaintCan(250);
	});

	it('should have a number of litres of paint', function () {
		const actual = paint_can.num_litres;
		assert.strictEqual(actual, 250);
	})

	it('should be able to check if it is empty', function () {
		const actual = paint_can.isEmpty();
		assert.strictEqual(actual, false);
	})

	it('should be able to empty itself of paint', function () {
		paint_can.empty();
		const actual = paint_can.isEmpty();
		assert.strictEqual(actual, true);
	})
})