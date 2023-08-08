const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe('Decorator', function () {
	let decorator;
	let paint_can1;
	let paint_can2;
	let paint_can3;
	let room1;

	beforeEach(function () {
		decorator = new Decorator();
		paint_can1 = new PaintCan(250);
		paint_can2 = new PaintCan(1000);
		paint_can3 = new PaintCan(750);
		room1 = new Room(1000);
	});

	it('should start with an empty paint stock', function () {
		const actual = decorator.paint_stock;
		assert.deepStrictEqual(actual, []);
	})

	it('should be able to add a can of paint to paint stock', function () {
		decorator.addCan(paint_can1);
		const actual = decorator.paint_stock;
		assert.deepStrictEqual(actual, [paint_can1]);
	})

	it('should be able to calculate total litres paint it has in stock', function() {
		decorator.addCan(paint_can1);
		decorator.addCan(paint_can2);
		const actual = decorator.calcTotalLitres();
		assert.strictEqual(actual, 1250);
	})

	it('should be able to calculate whether is has enough paint to paint a room', function () {
		decorator.addCan(paint_can1);
		const actual = decorator.hasEnoughPaint(room1);
		assert.strictEqual(actual, false);
		decorator.addCan(paint_can3);
		const new_actual = decorator.hasEnoughPaint(room1);
		assert.strictEqual(new_actual,true);
	})

	it('should be able to paint room if has enough paint in stock', function () {
		decorator.addCan(paint_can2);
		decorator.paintRoom(room1);
		const actual = room1.painted;
		assert.strictEqual(actual, true);
	})
})