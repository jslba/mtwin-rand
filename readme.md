# [Rand][index] implement of mt.Rand

![npm](https://img.shields.io/npm/v/mtwin-rand?color=blue&style=flat)
![tests](https://img.shields.io/static/v1?label=tests&message=11%20passed&color=brightgreen&style=flat)
![GitHub](https://img.shields.io/github/license/jslba/mtwin-rand?style=flat)

This is one of  the most used PRNG  algorithms by Motion-Twin.  The algorithm is
strongly inspired by the [Park-Miller-Carta linear congruential generator][PMCG]
PRNG algorithm.

> **Note**   
> If you are looking  for how to  use it, you  can look at some  examples in the
> [unit tests][unittests].

## Constructor

```hx
new Rand(?seed: Int = 0)
```

## Variables

```hx
// the seed used to determine the next random number
public seed: Int
```

## Methods

```hx
// returns a copy of the Rand instance
public clone(): Rand
```

```hx
// return a [0-1] float
public rand(): Float
```

```hx
// return a [0-max] int
public random(max: Int): Int
```

```hx
// return a [min-max]  float ; if randSign  is true, the  float will be randomly
// positive or negative.
public range(min: Float, max: Float, ?randSign: Bool = false): Float
```

```hx
// return a  [min-max]  int ; if  randSign  is  true, the  int will  be randomly
// positive or negative.
public irange(min: Int, max: Int, ?randSign: Bool = false): Int
```

```hx
// return current seed
public getSeed(): Int
```

```hx
// add `d` to `this.seed`
public addSeed(d: Int): void
```

```hx
// set `this.seed` with `n` after hashed it `k` time
public initSeed(n: Int, ?k: Int = 5): void
```

```hx
// return the next random number
public next(): Int
```

[index]: /source/index.js
[unittests]: /test/rand.test.js
[PMCG]: https://www.firstpr.com.au/dsp/rand31/