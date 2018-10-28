![stepping colors](https://cdn.jsdelivr.net/gh/mjswensen/color-steps@53b83ef842b5134399f37f396e686755916f879c/assets/gradient-1.svg)

# color-steps [![Travis](https://img.shields.io/travis/mjswensen/color-steps.svg)](https://travis-ci.org/mjswensen/color-steps)

A utility for calculating intermediate steps between two colors.

## API

This package exports a single function that takes three arguments:

* `color1` - a CSS color string
* `color2` - a CSS color string
* `count` - the desired number of intermediate colors to return, defaults to `6`

The return value is an array of colors in `rgba` format (or `rgb` if all colors have an alpha value of `1`).

## CLI

This package also exposes a single executable (called `color-steps`) that accepts command-line arguments which are the same as the function arguments detailed above.

```
color-steps "red" "blue" 10
```

## Try it

```
$ npx color-steps "black" "white" 5

rgb(43,43,43)
rgb(85,85,85)
rgb(128,128,128)
rgb(170,170,170)
rgb(212,212,212)
```

![stepping colors](https://cdn.jsdelivr.net/gh/mjswensen/color-steps@53b83ef842b5134399f37f396e686755916f879c/assets/gradient-2.svg)
