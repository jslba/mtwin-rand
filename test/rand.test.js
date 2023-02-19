const Rand = require("../source/index");

test("clone instance", function () {
	let instance = new Rand(19022023),
		clone = instance.clone();

	expect(clone.next()).toStrictEqual(instance.next());
});

test("rand result", function () {
	let instance = new Rand(19022023),
		expected = [
			0.8277205955830919, 0.6486459478365144, 0.5457179974018187,
			0.7103027880483661, 0.6092735085440192, 0.7499750174877585,
			0.5064454881582892, 0.5201359048665933, 0.14010192864994503,
			0.7605676026781253, 0.31238133306685323, 0.3086839212551214,
			0.2457279904067153, 0.8115319276506445, 0.5754971519936045,
			0.15439192565204357, 0.1404017187968422, 0.6547416808234237,
			0.04346957130008994, 0.3338662935944839,
		];
	for (let exp of expected) {
		expect(instance.rand()).toStrictEqual(exp);
	}
});

test("random (100) result", function () {
	let instance = new Rand(19022023),
		expected = [
			98, 42, 38, 21, 60, 63, 69, 69, 58, 2, 91, 64, 94, 76, 13, 52, 52,
			74, 59, 47,
		];
	for (let exp of expected) {
		expect(instance.random(100)).toStrictEqual(exp);
	}
});

test("range result (5, 20, false)", function () {
	let instance = new Rand(19022023),
		expected = [
			17.415808933746376, 14.729689217547715, 13.18576996102728,
			15.654541820725491, 14.139102628160288, 16.24962526231638,
			12.596682322374338, 12.8020385729989, 7.1015289297491755,
			16.40851404017188, 9.685719996002799, 9.630258818826821,
			8.68591985610073, 17.172978914759668, 13.632457279904068,
			7.315878884780654, 7.106025781952633, 14.821125212351355,
			5.652043569501349, 10.007994403917259,
		];
	for (let exp of expected) {
		expect(instance.range(5, 20)).toStrictEqual(exp);
	}
});

test("range result (5, 20, true)", function () {
	let instance = new Rand(19022023),
		expected = [
			-17.415808933746376, 13.18576996102728, 14.139102628160288,
			12.596682322374338, -7.1015289297491755, -9.685719996002799,
			-8.68591985610073, -13.632457279904068, -7.106025781952633,
			5.652043569501349, -11.378035375237335, -14.417907464774657,
			-8.681423003897272, 5.439192565204357, 9.345458179274509,
			-9.867093034875587, 5.035974817627661, 13.092835015489158,
			-10.07994403917258, -13.134805636054761,
		];
	for (let exp of expected) {
		expect(instance.range(5, 20, true)).toStrictEqual(exp);
	}
});

test("irange result (5, 20, false)", function () {
	let instance = new Rand(19022023),
		expected = [
			15, 19, 7, 10, 5, 8, 14, 14, 19, 7, 16, 9, 11, 13, 14, 17, 13, 19,
			20, 8,
		];
	for (let exp of expected) {
		expect(instance.irange(5, 20)).toStrictEqual(exp);
	}
});

test("irange result (5, 20, true)", function () {
	let instance = new Rand(19022023),
		expected = [
			-15, 7, 5, 14, -19, -16, -11, -14, -13, 20, -5, -11, -17, 13, 8, -6,
			10, 15, -7, -20,
		];
	for (let exp of expected) {
		expect(instance.irange(5, 20, true)).toStrictEqual(exp);
	}
});

test("get seed", function () {
	let instance = new Rand(19022023);
	expect(instance.getSeed()).toStrictEqual(19022023);
});

test("add seed", function () {
	let instance = new Rand();
	instance.addSeed(19022023);
	expect(instance.getSeed()).toStrictEqual(19022023);
});

test("init seed", function () {
	let instance = new Rand();
	instance.initSeed(19022023);
	expect(instance.getSeed()).toStrictEqual(478304728);
});

test("next", function () {
	let instance = new Rand(19022023),
		expected = [
			804020698, 135030942, 648569138, 948260421, 936751360, 777491363,
			933087769, 406809769, 737597358, 449452002, 166069291, 471582964,
			606476694, 22673976, 976909113, 325239052, 946873752, 179592174,
			117402559, 721087747,
		];
	for (let exp of expected) {
		expect(instance.next()).toStrictEqual(exp);
	}
});
