// Inspired by Park-Miller-Carta linear congruential generator
class Rand {
	constructor(seed = 0) {
		this.seed = Math.abs(seed) + 131;
	}

	clone() {
		let r = new Rand();
		r.seed = this.seed;
		return r;
	}

	// return a [0-1] float  with a precision of 1/10007,  see this.random() for
	// int retrieval.
	rand() {
		// we can't use a  divider > 16807 or  else two consecutive  seeds might
		// generate a similar float.
		return (this.next() % 10007) / 10007;
	}

	// returns an int in the 30-bit int range.
	// int bits are not fully distributed, so it works well with small modulo.
	random(max) {
		return this.next() % max;
	}

	// float [min, max]
	range(min, max, randSign = false) {
		let r = this.rand() * (max - min) + min;
		return randSign && this.random(2) < 1 ? -r : r;
	}

	// int [min, max]
	irange(min, max, randSign = false) {
		let r = this.random(max - min + 1) + min;
		return randSign && this.random(2) < 1 ? -r : r;
	}

	getSeed() {
		return this.seed - 131;
	}

	addSeed(d) {
		this.seed = (this.seed + d) % 0x7fffffff & 0x3fffffff;
		if (this.seed == 0) {
			this.seed = d + 1;
		}
	}

	initSeed(n, k = 5) {
		// we are using a double hashing function that we loop K times. It seems
		// to provide good-enough randomness.  In case it doesn't, we can use an
		// higher K.
		for (let i = 0; i < k; i++) {
			n ^= (n << 7) & 0x2b5b2500;
			n ^= (n << 15) & 0x1b8b0000;
			n ^= n >>> 16;
			n &= 0x3fffffff;
			let h = 5381;
			h = (h << 5) + h + (n & 0xff);
			h = (h << 5) + h + ((n >> 8) & 0xff);
			h = (h << 5) + h + ((n >> 16) & 0xff);
			h = (h << 5) + h + (n >> 24);
			n = h & 0x3fffffff;
		}
		this.seed = (n & 0x1fffffff) + 131;
	}

	// int bits are not fully distributed, so it works well with small modulo.
	next() {
		this.seed = Math.floor((this.seed * 16807) % 0x7fffffff);
		return this.seed & 0x3fffffff;
	}
}

module.exports = Rand;
