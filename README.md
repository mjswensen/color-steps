# color-steps [![Travis](https://img.shields.io/travis/mjswensen/color-steps.svg)](https://travis-ci.org/mjswensen/color-steps)

A utility for calculating intermediate steps between two colors.

## API

This package exports a single function that takes three arguments:

* `color1` - a string representation of a color
* `color2` - a string representation of a color
* `count` - the desired number of intermediate colors to return, defaults to `6`

The return value is an array of colors in string format, either `rgba` or `rgb` if all colors have an alpha value of `1`.

## CLI

This package also exposes a single executable (called `color-steps`) that accepts command-line arguments which are the same as the function arguments detailed above.

```
color-steps "red" "blue" 10
```

## Try it

```
$ npx color-steps "black" "white" 5

rgb(5,5,5)
rgb(10,10,10)
rgb(15,15,15)
rgb(20,20,20)
rgb(25,25,25)
```
